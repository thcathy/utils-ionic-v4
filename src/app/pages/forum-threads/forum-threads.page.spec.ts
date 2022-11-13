import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ForumThreadsPage } from './forum-threads.page';
import {RouterTestingModule} from '@angular/router/testing';
import {LoadingController, Platform} from '@ionic/angular';
import {LoadingControllerSpy, NGXLoggerSpy, PlatformMock} from '../../../mocks-ionic';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NGXLogger} from 'ngx-logger';

describe('ForumThreadsPage', () => {
  let component: ForumThreadsPage;
  let fixture: ComponentFixture<ForumThreadsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumThreadsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
      ],
      providers: [
        { provide: LoadingController, useValue: LoadingControllerSpy() },
        { provide: Platform, useValue: PlatformMock },
        { provide: NGXLogger, useValue: NGXLoggerSpy() }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumThreadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
