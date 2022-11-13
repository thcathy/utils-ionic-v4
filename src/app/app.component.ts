import {Component, NgZone} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {MyAuthService} from './service/my-auth.service';
import './prototypes/storage-prototypes';

import {Router} from '@angular/router';
import {AppService} from './service/app.service';
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import config from '../../capacitor.config';

const auth0CallbackUri = `${config.appId}://thcathy.auth0.com/capacitor/${config.appId}/callback`;

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private authService: MyAuthService,
        public router: Router,
        public appService: AppService,
        private zone: NgZone,
    ) {
        this.authService.handleAuthCallbackWeb();
        this.initializeApp();
    }

    initializeApp() {
        console.log(`${this.platform.platforms()}`);
        console.log(`start initializeApp`);
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });

        if (this.appService.isCapacitor()) {
            App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
                this.zone.run(() => {
                    console.log(`url=${event.url}`);
                    if (event.url.includes(auth0CallbackUri)) {
                        this.authService.handleAuthCallbackCapacitor(event.url);
                        return;
                    }

                    this.router.navigate(['/home']);
                });
            });
        }
    }

    login() {
        this.authService.login();
    }

    logout() {
        this.authService.logout();
    }

    isAuthenticated(): boolean {
        return this.authService.isAuthenticated();
    }
}
