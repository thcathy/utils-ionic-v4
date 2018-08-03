import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumWishListPage } from './forum-wish-list.page';
import {AlertController, LoadingController, Platform} from '@ionic/angular';
import {AlertControllerSpy, AuthServiceSpy, LoadingControllerSpy, NGXLoggerSpy, PlatformMock} from '../../../mocks-ionic';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {NGXLogger} from 'ngx-logger';
import {AuthService} from '../../service/auth.service';

describe('ForumWishListPage', () => {
  let component: ForumWishListPage;
  let fixture: ComponentFixture<ForumWishListPage>;

  beforeEach(async(() => {
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
        { provide: AuthService, useValue: AuthServiceSpy()}
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
