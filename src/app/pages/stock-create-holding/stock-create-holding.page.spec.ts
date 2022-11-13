import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StockCreateHoldingPage } from './stock-create-holding.page';
import {AlertController, LoadingController, Platform} from '@ionic/angular';
import {AlertControllerSpy, AuthServiceSpy, LoadingControllerSpy, NGXLoggerSpy, PlatformMock} from '../../../mocks-ionic';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AuthService} from '../../service/auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {NGXLogger} from 'ngx-logger';

describe('StockCreateHoldingPage', () => {
  let component: StockCreateHoldingPage;
  let fixture: ComponentFixture<StockCreateHoldingPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCreateHoldingPage ],
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
        { provide: AuthService, useValue: AuthServiceSpy()}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCreateHoldingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
