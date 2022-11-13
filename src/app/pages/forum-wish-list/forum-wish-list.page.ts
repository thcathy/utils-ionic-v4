import {Component, OnInit} from '@angular/core';
import {ForumWishItem} from '../../entity/forum-wishlist';
import {AlertController} from '@ionic/angular';
import {ForumService} from '../../service/forum.service';
import {MyAuthService} from '../../service/my-auth.service';

@Component({
    selector: 'app-forum-wish-list',
    templateUrl: './forum-wish-list.page.html',
    styleUrls: ['./forum-wish-list.page.scss'],
})
export class ForumWishListPage implements OnInit {
    wishlists: ForumWishItem[];
    itemText: string;

    constructor(
        public alertController: AlertController,
        public forumService: ForumService,
        public authService: MyAuthService
    ) {
    }

    ngOnInit() {
        if (!this.authService.requireAuthenticated()) {
            return;
        }

        this.forumService.getWishList().then(
          lists => this.wishlists = lists
        );
    }

    onAdd() {
        console.log(`Add ${this.itemText} to wish list`);
        this.forumService.addWishList(this.itemText)
            .then(newItem => {
                this.wishlists.push(newItem);
                this.itemText = '';
            });
    }

    onDelete(item: ForumWishItem) {
        console.log(`Delete ${item.text} from wish list`);
        this.forumService.deleteWishList(item.text)
            .then(list => this.wishlists = list);
    }

    async confirmDelete(item: ForumWishItem) {
        const alert = await this.alertController.create({
            header: 'Confirm remove',
            subHeader: item.text,
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'OK',
                    handler: () => {
                        this.onDelete(item);
                    }
                }]
        });

        await alert.present();
    }
}
