import { NgModule } from '@angular/core';
import {SelectFundComponent} from './select-fund.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SelectFundComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    SelectFundComponent
  ]
})
export class SelectFundComponentModule {}
