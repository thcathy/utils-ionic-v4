import { NgModule } from '@angular/core';
import {SelectFundComponent} from './select-fund.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    SelectFundComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [
    SelectFundComponent
  ]
})
export class SelectFundComponentModule {}
