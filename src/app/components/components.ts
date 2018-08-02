import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SelectFundComponent} from './select-fund/select-fund.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    SelectFundComponent
  ],
  entryComponents: [],
  exports: [
    SelectFundComponent
  ]
})
export class ComponentsModule {}
