import {Injectable, NgZone} from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {AppService} from './app.service';
import {Router} from '@angular/router';
import {mergeMap} from 'rxjs/operators';
import { Browser } from '@capacitor/browser';
import {AuthService} from '@auth0/auth0-angular';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

export class Session {
  idToken: string;
  accessToken: string;
  expiresAt: number;
  email: string;
}

const auth0CallbackUri = '/callback';

@Injectable({ providedIn: 'root' })
export class MyAuthService {
  static sessionKey = 'thc_session';
  session: Session;

  constructor(private zone: NgZone,
              private appService: AppService,
              private auth: AuthService,
              private router: Router) {
  }

  public login(): void {
    if (this.appService.isApp()) {
      this.loginCapacitor();
    } else {
      this.loginWeb();
    }
  }

  public loginCapacitor() {
    this.auth
        .buildAuthorizeUrl()
        .pipe(mergeMap((url) => Browser.open({ url, windowName: '_self' })))
        .subscribe();
  }

  private loginWeb() {
    this.auth.loginWithRedirect({
      redirect_uri: window.location.origin + auth0CallbackUri,
    });
  }

  public handleAuthCallbackWeb(): void {
    if (window.location.href.includes(auth0CallbackUri)) {
      this.handleAuthCallbackCapacitor(window.location.href);
    }
  }

  public async handleAuthCallbackCapacitor(url: string) {
    if (url.includes('state=') && (url.includes('error=') || url.includes('code='))) {
      console.log(`handle auth callback by capacitor`);
      await firstValueFrom(this.auth.handleRedirectCallback(url));
      const idToken = (await firstValueFrom(this.auth.idTokenClaims$)).__raw;
      const accessToken = await firstValueFrom(this.auth.getAccessTokenSilently());

      this.setSession(accessToken, idToken);
      this.closeBrowserIfNeeded();
      this.redirectAfterLogin();
    } else {
      console.error(`Cannot process callback: ${url}`);
      this.closeBrowserIfNeeded();
    }
  }

  private closeBrowserIfNeeded() {
    if (this.appService.isApp()) {
      Browser.close();
    }
  }

  private redirectAfterLogin() {
    this.router.navigate(['/home']);
  }

  private setSession(accessToken: string, idToken: string): void {
    const session = new Session();
    session.accessToken = accessToken;
    session.idToken = idToken;
    const decodeIdToken = jwt_decode(idToken);
    session.expiresAt = decodeIdToken['exp'] * 1000;
    session.email = decodeIdToken.email;
    this.session = session;
    localStorage.setObject(MyAuthService.sessionKey, session);
  }

  public logout(): void {
    localStorage.removeItem(MyAuthService.sessionKey);
    this.router.navigate(['/home']);
  }

  public isAuthenticated(): boolean {
    const session = localStorage.getObject(MyAuthService.sessionKey) as Session;
    return session != null && Date.now() < session.expiresAt;
  }

  public requireAuthenticated(): boolean {
    if (!this.isAuthenticated()) {
      console.log(`require login, redirect to login page`);
      alert(`Please login!`);
      this.login();
      return false;
    }
    return true;
  }

  public loadSession(): void {
    this.session = localStorage.getObject(MyAuthService.sessionKey) as Session;
  }
}
