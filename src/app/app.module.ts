import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

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
import {AuthService} from './service/auth.service';
import {AuthCordovaService} from './service/auth-cordova.service';
import {AppService} from './service/app.service';
import {SelectFundComponent} from './components/select-fund/select-fund.component';
import {ForumTabPageModule} from './pages/forum-tab/forum-tab.module';

@NgModule({
  declarations: [AppComponent, SelectFundComponent],
  entryComponents: [],
  imports: [
      BrowserModule, IonicModule.forRoot(),
      ForumTabPageModule,
      LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG}),
      AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ForumService,
    StockService,
    SquoteService,
    FundService,
    AuthService,
    AuthCordovaService,
    AppService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NGXLogger,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
