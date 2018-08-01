import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumTabPage } from './forum-tab.page';

describe('ForumTabPage', () => {
  let component: ForumTabPage;
  let fixture: ComponentFixture<ForumTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
