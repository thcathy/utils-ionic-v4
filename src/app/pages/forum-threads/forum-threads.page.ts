import { Component, OnInit } from '@angular/core';
import {ForumThread} from '../../entity/forum-thread';
import {AppService} from '../../service/app.service';
import {ForumService} from '../../service/forum.service';
import {LoadingController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {NGXLogger} from 'ngx-logger';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-forum-threads',
  templateUrl: './forum-threads.page.html',
  styleUrls: ['./forum-threads.page.scss'],
})
export class ForumThreadsPage implements OnInit {
  DEFAULT_THREAD = [
    { 'url': '/', 'title': 'loading', 'source': 'loading', 'visited': false, 'wished': false, 'createdDate': new Date()}
  ];

  threads:  ForumThread[];
  type: string;
  loading: any;

  constructor(private route: ActivatedRoute,
              public loadingController: LoadingController,
              private forumService: ForumService,
              public appService: AppService,
              public logger: NGXLogger) {
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.threads = this.DEFAULT_THREAD;
    this.showLoading();
    this.type = this.route.snapshot.paramMap.get('type');
    this.logger.info(`ionViewWillEnter params: ${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.forumService.getForumThreads(this.type, Number(this.route.snapshot.paramMap.get('page')))
      .subscribe(
        data => {
          this.threads = data;
          this.loading.dismiss();
        },
        err => this.appService.handleError(err)
      );
  }

  async showLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 3000
    });
    this.loading.present();
  }

  onSelectThread(thread: ForumThread): void {
    console.log('Selected thread: ' + thread);
    thread.visited = true;
    window.open('http://' + thread.url, '_blank');
    this.forumService.visitedUrl(thread.url, thread.title);
  }

  addToWishList(thread: ForumThread): void {
    console.log(`add ${thread.title} to wish list`);
    this.forumService.addWishList(thread.title).then(i => {
      thread.wished = true;
    });
  }

}
