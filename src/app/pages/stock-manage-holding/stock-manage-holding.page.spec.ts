import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManageHoldingPage } from './stock-manage-holding.page';

describe('StockManageHoldingPage', () => {
  let component: StockManageHoldingPage;
  let fixture: ComponentFixture<StockManageHoldingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockManageHoldingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockManageHoldingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
