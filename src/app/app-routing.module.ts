import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: './pages/home/home.module#HomePageModule'},
  {path: 'forum-tab', loadChildren: './pages/forum-tab/forum-tab.module#ForumTabPageModule'},
  {path: 'stock-full-quote', loadChildren: './pages/stock-full-quote/stock-full-quote.module#StockFullQuotePageModule'},
  {path: 'stock-create-holding', loadChildren: './pages/stock-create-holding/stock-create-holding.module#StockCreateHoldingPageModule'},
  {path: 'stock-manage-holding', loadChildren: './pages/stock-manage-holding/stock-manage-holding.module#StockManageHoldingPageModule'},
  {path: 'stock-manage-fund', loadChildren: './pages/stock-manage-fund/stock-manage-fund.module#StockManageFundPageModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
