import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockFullQuotePage } from './stock-full-quote.page';
import {AlertController, LoadingController, ModalController, Platform, PopoverController, ToastController} from '@ionic/angular';
import {
  AlertControllerSpy,
  AuthServiceSpy,
  LoadingControllerSpy, ModalControllerSpy,
  NGXLoggerSpy,
  PlatformMock,
  PopoverControllerSpy, ToastControllerSpy
} from '../../../mocks-ionic';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AuthService} from '../../service/auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {NGXLogger} from 'ngx-logger';

describe('StockFullQuotePage', () => {
  let component: StockFullQuotePage;
  let fixture: ComponentFixture<StockFullQuotePage>;

  beforeEach(async(() => {
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
        { provide: AuthService, useValue: AuthServiceSpy()},
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
