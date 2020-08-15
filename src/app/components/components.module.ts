import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MenuItemComponent} from './menu-item/menu-item.component';

@NgModule({
  declarations: [
    MenuItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  exports: [
    MenuItemComponent,
  ]
})
export class ComponentsModule {}
