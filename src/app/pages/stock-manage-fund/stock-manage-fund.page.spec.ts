import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StockManageFundPage } from './stock-manage-fund.page';
import {AlertController, LoadingController, Platform} from '@ionic/angular';
import {AlertControllerSpy, AuthServiceSpy, LoadingControllerSpy, NGXLoggerSpy, PlatformMock} from '../../../mocks-ionic';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MyAuthService} from '../../service/my-auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {NGXLogger} from 'ngx-logger';

describe('StockManageFundPage', () => {
  let component: StockManageFundPage;
  let fixture: ComponentFixture<StockManageFundPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StockManageFundPage ],
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
        { provide: MyAuthService, useValue: AuthServiceSpy()}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockManageFundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
