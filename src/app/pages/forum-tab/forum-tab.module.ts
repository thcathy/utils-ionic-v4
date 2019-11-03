import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ForumTabPage} from './forum-tab.page';
import {ForumTabPageRoutingModule} from './forum-tab.router.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumTabPageRoutingModule
  ],
  declarations: [ForumTabPage]
})
export class ForumTabPageModule {
}
