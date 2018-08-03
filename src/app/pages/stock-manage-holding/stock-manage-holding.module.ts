import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StockManageHoldingPage } from './stock-manage-holding.page';

const routes: Routes = [
  {
    path: '',
    component: StockManageHoldingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StockManageHoldingPage]
})
export class StockManageHoldingPageModule {}
