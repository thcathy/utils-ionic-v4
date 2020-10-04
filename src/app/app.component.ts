import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AuthService} from './service/auth.service';
import './prototypes/storage-prototypes';

import Auth0Cordova from '@auth0/cordova';
import {Router} from '@angular/router';
import { Plugins } from '@capacitor/core';

const { App } = Plugins;

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private authService: AuthService,
        public router: Router,
    ) {
        authService.handleAuthentication();
        this.initializeApp();
    }

    initializeApp() {
        console.log(`${this.platform.platforms()}`);
        console.log(`start initializeApp`);
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });

        App.addListener('appUrlOpen', (data: any) => {
            console.log('App opened with URL: ' +  data.url);
            Auth0Cordova.onRedirectUri(data.url);
        });
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
