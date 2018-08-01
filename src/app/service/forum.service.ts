import { ForumThread } from '../entity/forum-thread';
import {ForumWishItem} from '../entity/forum-wishlist';

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'root' })
export class ForumService {
  private LIST_URL = environment.apiHost + '/rest/forum/list/';  // URL to web API
  private VISITED_URL = environment.apiHost + '/rest/forum/visited';
  private WISHLIST_URL = environment.apiHost + '/rest/forum/wishlist/list';
  private ADD_WISHLIST_URL = environment.apiHost + '/rest/forum/wishlist/add/';
  private DELETE_WISHLIST_URL = environment.apiHost + '/rest/forum/wishlist/delete/';

  constructor (private http: HttpClient) {}

  getForumThreads(type: String, page: number): Observable<ForumThread[]> {
    return this.http.get<ForumThread[]>(this.LIST_URL + type + '/' + page);
  }

  visitedUrl(url: string, title: string): Promise<string> {
    return this.http.post(this.VISITED_URL, {'url': url, 'title': title}, {responseType: 'text'})
      .toPromise()
      .then(response => 'success')
      .catch(this.handleError);
  }

  getWishList(): Promise<ForumWishItem[]> {
    return this.http.get(this.WISHLIST_URL)
      .toPromise()
      .then(response => response as ForumWishItem[])
      .catch(this.handleError);
  }

  addWishList(text: string): Promise<ForumWishItem> {
    return this.http.post<ForumWishItem>(this.ADD_WISHLIST_URL, text)
      .toPromise()
      .then(response => response as ForumWishItem)
      .catch(this.handleError);
  }

  deleteWishList(text: string): Promise<ForumWishItem[]> {
    return this.http.post<ForumWishItem[]>(this.DELETE_WISHLIST_URL, text)
      .toPromise()
      .then(response => response as ForumWishItem[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
