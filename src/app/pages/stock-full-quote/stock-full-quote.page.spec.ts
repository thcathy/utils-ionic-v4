import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockFullQuotePage } from './stock-full-quote.page';

describe('StockFullQuotePage', () => {
  let component: StockFullQuotePage;
  let fixture: ComponentFixture<StockFullQuotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockFullQuotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
