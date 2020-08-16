import {Injectable, NgZone} from '@angular/core';
import Auth0Cordova from '@auth0/cordova';
import Auth0 from 'auth0-js';
import * as jwt_decode from 'jwt-decode';
import {AppService} from './app.service';
import {Router} from '@angular/router';

const auth0CordovaConfig = {
  // needed for auth0
  clientID: 'mBv3zeOBD6Wl2NI2zMzeJFO8kZU7XyJl',

  // needed for auth0cordova
  clientId: 'mBv3zeOBD6Wl2NI2zMzeJFO8kZU7XyJl',
  domain: 'thcathy.auth0.com',
  callbackURL: location.href,
  packageIdentifier: 'com.thc.utils',
  scope: 'openid profile'
};

export class Session {
  idToken: string;
  accessToken: string;
  expiresAt: number;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  static sessionKey = 'thc_session';
  auth0Cordova = new Auth0.WebAuth(auth0CordovaConfig);

  auth0 = new Auth0.WebAuth({
    clientID: 'mBv3zeOBD6Wl2NI2zMzeJFO8kZU7XyJl',
    domain: 'thcathy.auth0.com',
    responseType: 'token id_token',
    audience: 'https://thcathy.auth0.com/userinfo',
    redirectUri: window.location.origin,
    scope: 'openid profile'
  });

  constructor(private zone: NgZone,
              private appService: AppService,
              private router: Router) {
  }

  public login(): void {
    if (this.appService.isCordova()) {
      console.log('login by cordova');
      this.loginCordova();
    } else {
      console.log('login by auth0 web page');
      this.auth0.authorize();
    }

  }

  public handleAuthentication(): void {
    console.log('handleAuthentication');
    this.auth0.parseHash((err, authResult) => {
      if (err) {
        console.error(`${JSON.stringify(err)}`);
        return;
      }
      window.location.hash = '';
      this.onAuthSuccess(authResult);
    });
  }

  public onAuthSuccess(authResult) {
    if (authResult && authResult.accessToken && authResult.idToken) {
      this.setSession(authResult);
      this.router.navigate(['/home']);
    }
  }

  public loginCordova() {
    const client = new Auth0Cordova(auth0CordovaConfig);
    const options = { scope: 'openid profile offline_access email' };

    client.authorize(options, (err, authResult) => {
      if (err) {
        throw err;
      }
      this.onAuthSuccess(authResult);
    });
  }

  private setSession(authResult): void {
    const session = new Session();
    session.accessToken = authResult.accessToken;
    session.idToken = authResult.idToken;
    const decodeIdToken = jwt_decode(authResult.idToken);
    session.expiresAt = decodeIdToken['exp'] * 1000;
    console.log(`session: ${JSON.stringify(session)}`);
    localStorage.setObject(AuthService.sessionKey, session);
  }

  public logout(): void {
    localStorage.removeItem(AuthService.sessionKey);
    this.router.navigate(['/home']);
  }

  public isAuthenticated(): boolean {
    const session = localStorage.getObject(AuthService.sessionKey) as Session;
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
}
