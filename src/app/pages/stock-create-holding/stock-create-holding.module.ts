import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StockCreateHoldingPage } from './stock-create-holding.page';
import {ComponentsModule} from '../../components/components';

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
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StockCreateHoldingPage]
})
export class StockCreateHoldingPageModule {}
