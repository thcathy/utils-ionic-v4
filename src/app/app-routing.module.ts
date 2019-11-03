import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)},
  {path: 'stock-full-quote', loadChildren: () => import('./pages/stock-full-quote/stock-full-quote.module').then(m => m.StockFullQuotePageModule)},
  {path: 'stock-create-holding', loadChildren: () => import('./pages/stock-create-holding/stock-create-holding.module').then(m => m.StockCreateHoldingPageModule)},
  {path: 'stock-manage-holding', loadChildren: () => import('./pages/stock-manage-holding/stock-manage-holding.module').then(m => m.StockManageHoldingPageModule)},
  {path: 'stock-manage-fund', loadChildren: () => import('./pages/stock-manage-fund/stock-manage-fund.module').then(m => m.StockManageFundPageModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
