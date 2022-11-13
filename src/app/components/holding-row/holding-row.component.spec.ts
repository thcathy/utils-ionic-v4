import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HoldingRowComponent } from './holding-row.component';

describe('HoldingRowComponent', () => {
  let component: HoldingRowComponent;
  let fixture: ComponentFixture<HoldingRowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldingRowComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HoldingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

});
