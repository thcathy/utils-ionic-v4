import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FundHoldingRowComponent } from './fund-holding-row.component';

describe('FundHoldingRowComponent', () => {
  let component: FundHoldingRowComponent;
  let fixture: ComponentFixture<FundHoldingRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundHoldingRowComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FundHoldingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
