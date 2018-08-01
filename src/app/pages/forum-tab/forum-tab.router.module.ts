import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ForumTabPage} from './forum-tab.page';
import {ForumWishListPage} from '../forum-wish-list/forum-wish-list.page';

const routes: Routes = [
    {
        path: 'forum-tab',
        component: ForumTabPage,
        children: [
            {
                path: 'wishlist',
                outlet: 'wishlist',
                component: ForumWishListPage
            },
        ]
    },
    {
        path: '',
        redirectTo: '/forum-tab/(wishlist:wishlist)',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ForumTabPageRoutingModule {}
