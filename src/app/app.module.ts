import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {LoggerModule, NGXLogger, NgxLoggerLevel} from 'ngx-logger';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ForumService} from './service/forum.service';
import {StockService} from './service/stock.service';
import {SquoteService} from './service/squote.service';
import {FundService} from './service/fund.service';
import {MyAuthService} from './service/my-auth.service';
import {AppService} from './service/app.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {IdTokenInterceptor} from './interceptor/IdTokenInterceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {ComponentsModule} from './components/components.module';
import config from '../../capacitor.config';
import {AuthModule} from '@auth0/auth0-angular';

const auth0RedirectUri = `${config.appId}://thcathy.auth0.com/capacitor/${config.appId}/callback`;

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule, IonicModule.forRoot(),
        HttpClientModule,
        LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG }),
        AppRoutingModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        ComponentsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        AuthModule.forRoot({
            domain: 'thcathy.auth0.com',
            clientId: 'mBv3zeOBD6Wl2NI2zMzeJFO8kZU7XyJl',
            scope: 'openid profile email',
            cacheLocation: 'localstorage',
            redirectUri: auth0RedirectUri,
            skipRedirectCallback: true
        }),
    ],
    providers: [
        StatusBar,
        SplashScreen,
        ForumService,
        StockService,
        SquoteService,
        FundService,
        MyAuthService,
        AppService,
        NGXLogger,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: IdTokenInterceptor,
            multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
