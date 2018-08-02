import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManageFundPage } from './stock-manage-fund.page';

describe('StockManageFundPage', () => {
  let component: StockManageFundPage;
  let fixture: ComponentFixture<StockManageFundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockManageFundPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockManageFundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
