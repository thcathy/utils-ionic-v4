import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ForumWishListPage } from './forum-wish-list.page';
import {AlertController, LoadingController, Platform} from '@ionic/angular';
import {AlertControllerSpy, AuthServiceSpy, LoadingControllerSpy, NGXLoggerSpy, PlatformMock} from '../../../mocks-ionic';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {NGXLogger} from 'ngx-logger';
import {MyAuthService} from '../../service/my-auth.service';

describe('ForumWishListPage', () => {
  let component: ForumWishListPage;
  let fixture: ComponentFixture<ForumWishListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumWishListPage ],
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
    fixture = TestBed.createComponent(ForumWishListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
