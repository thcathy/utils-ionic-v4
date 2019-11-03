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
              // outlet: 'wishlist',
              // component: ForumWishListPage,
              loadChildren: '../forum-wish-list/forum-wish-list.module#ForumThreadsPageModule'
          },
          {
              path: 'music',
              // outlet: 'music', component: ForumThreadsPage
              loadChildren: '../forum-threads/forum-threads.module#ForumThreadsPageModule'
          },
          {
            path: 'movie',
            // outlet: 'movie', component: ForumThreadsPage
            loadChildren: '../forum-threads/forum-threads.module#ForumThreadsPageModule'
          },
          {
            path: '',
            redirectTo: '/forum-tab/wishlist',
            pathMatch: 'full'
          }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ForumTabPageRoutingModule {}
