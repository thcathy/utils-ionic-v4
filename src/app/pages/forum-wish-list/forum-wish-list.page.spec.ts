import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumWishListPage } from './forum-wish-list.page';

describe('ForumWishListPage', () => {
  let component: ForumWishListPage;
  let fixture: ComponentFixture<ForumWishListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumWishListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
