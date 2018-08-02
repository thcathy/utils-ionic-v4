import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StockCreateHoldingPage } from './stock-create-holding.page';
import {SelectFundComponentModule} from '../../components/select-fund/select-fund.module';

const routes: Routes = [
  {
    path: '',
    component: StockCreateHoldingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectFundComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StockCreateHoldingPage]
})
export class StockCreateHoldingPageModule {}
