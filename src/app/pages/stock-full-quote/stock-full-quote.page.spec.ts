import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StockFullQuotePage } from './stock-full-quote.page';
import {AlertController, LoadingController, ModalController, Platform, PopoverController, ToastController} from '@ionic/angular';
import {
  AlertControllerSpy,
  MyAuthServiceSpy,
  LoadingControllerSpy, ModalControllerSpy,
  NGXLoggerSpy,
  PlatformMock,
  PopoverControllerSpy, ToastControllerSpy
} from '../../../mocks-ionic';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MyAuthService} from '../../service/my-auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {NGXLogger} from 'ngx-logger';

describe('StockFullQuotePage', () => {
  let component: StockFullQuotePage;
  let fixture: ComponentFixture<StockFullQuotePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StockFullQuotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
      ],
      providers: [
        { provide: LoadingController, useValue: LoadingControllerSpy() },
        { provide: Platform, useValue: PlatformMock },
        { provide: NGXLogger, useValue: NGXLoggerSpy() },
        { provide: AlertController, useValue: AlertControllerSpy() },
        { provide: MyAuthService, useValue: MyAuthServiceSpy()},
        { provide: PopoverController, useValue: PopoverControllerSpy()},
        { provide: ToastController, useValue: ToastControllerSpy() },
        { provide: ModalController, useValue: ModalControllerSpy() }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockFullQuotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
