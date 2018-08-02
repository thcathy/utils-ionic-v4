import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCreateHoldingPage } from './stock-create-holding.page';

describe('StockCreateHoldingPage', () => {
  let component: StockCreateHoldingPage;
  let fixture: ComponentFixture<StockCreateHoldingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCreateHoldingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
