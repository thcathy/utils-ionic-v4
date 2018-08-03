import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumThreadsPage } from './forum-threads.page';

describe('ForumThreadsPage', () => {
  let component: ForumThreadsPage;
  let fixture: ComponentFixture<ForumThreadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumThreadsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
