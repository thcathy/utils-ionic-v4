import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MenuItemComponent} from './menu-item/menu-item.component';
import {StockQuote} from '../entity/stock-quote';
import {StockQuoteSettingsComponent} from './stock-quote-settings/stock-quote-settings.component';

@NgModule({
  declarations: [
    MenuItemComponent,
    StockQuoteSettingsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  exports: [
    MenuItemComponent,
    StockQuoteSettingsComponent,
  ]
})
export class ComponentsModule {}
