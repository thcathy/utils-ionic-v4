import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ForumTabPage} from './forum-tab.page';
import {ForumTabPageRoutingModule} from './forum-tab.router.module';
import {ForumWishListPageModule} from '../forum-wish-list/forum-wish-list.module';

const routes: Routes = [
    {
        path: '',
        component: ForumTabPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ForumWishListPageModule,
        ForumTabPageRoutingModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ForumTabPage]
})
export class ForumTabPageModule {
}
