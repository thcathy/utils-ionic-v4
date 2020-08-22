import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {MenuItemComponent} from './menu-item/menu-item.component';
import {CodePopoverMenu, StockQuoteSettingsComponent} from './stock-quote-settings/stock-quote-settings.component';

@NgModule({
  declarations: [
    MenuItemComponent,
    StockQuoteSettingsComponent, CodePopoverMenu,
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule.forRoot(),
  ],
  exports: [
    MenuItemComponent,
    StockQuoteSettingsComponent,
  ],
  entryComponents: [ CodePopoverMenu ],
})
export class ComponentsModule {
}
