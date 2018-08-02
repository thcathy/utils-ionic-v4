import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StockManageFundPage } from './stock-manage-fund.page';

const routes: Routes = [
  {
    path: '',
    component: StockManageFundPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StockManageFundPage]
})
export class StockManageFundPageModule {}
