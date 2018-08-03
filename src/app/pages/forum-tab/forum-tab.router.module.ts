import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ForumTabPage} from './forum-tab.page';
import {ForumWishListPage} from '../forum-wish-list/forum-wish-list.page';
import {ForumThreadsPage} from '../forum-threads/forum-threads.page';

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
          {
              path: 'threads',  outlet: 'music', component: ForumThreadsPage
          },
          {
            path: 'threads',  outlet: 'movie', component: ForumThreadsPage
          }
        ]
    },
    {
        path: 'forum-tab',
        redirectTo: '/forum-tab/(wishlist:wishlist)',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ForumTabPageRoutingModule {}
