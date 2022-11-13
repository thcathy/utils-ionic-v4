import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {IonicModule, Platform} from '@ionic/angular';

import { StockQuoteSettingsComponent } from './stock-quote-settings.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {NGXLogger} from 'ngx-logger';
import {NGXLoggerSpy, StorageSpy} from '../../../mocks-ionic';
import {FormBuilder} from '@angular/forms';
import {Storage} from '@ionic/storage';

describe('StockQuoteSettingsComponent', () => {
  let component: StockQuoteSettingsComponent;
  let fixture: ComponentFixture<StockQuoteSettingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StockQuoteSettingsComponent ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
      ],
      providers: [
        { provide: NGXLogger, useValue: NGXLoggerSpy() },
        { provode: Storage, useValue: StorageSpy() },
        FormBuilder,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StockQuoteSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
