import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectFundComponent } from './select-fund.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Platform} from '@ionic/angular';
import {NGXLoggerSpy} from '../../../mocks-ionic';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {NGXLogger} from 'ngx-logger';

describe('SelectFundComponent', () => {
  let component: SelectFundComponent;
  let fixture: ComponentFixture<SelectFundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFundComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: NGXLogger, useValue: NGXLoggerSpy() }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
