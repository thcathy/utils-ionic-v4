import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFundComponent } from './select-fund.component';

describe('SelectFundComponent', () => {
  let component: SelectFundComponent;
  let fixture: ComponentFixture<SelectFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFundComponent ]
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
