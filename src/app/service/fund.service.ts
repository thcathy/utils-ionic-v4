import {Fund} from '../entity/fund';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class FundService {
  private ALL_FUND_URL = environment.apiHost + '/rest/fund/getall';
  private BASE_REQUEST_URL = environment.apiHost + '/rest/fund/';

  constructor (private http: HttpClient) {}

  getFunds(): Observable<Fund[]> {
    return this.http.get<Fund[]>(this.ALL_FUND_URL);
  }

  submitRequest(request: string): Promise<string> {
    if (request.slice(-1) !== '/') { request += '/'; }
    console.log(`calling fund request url ${request}`);
    return this.http.get(this.BASE_REQUEST_URL + request)
            .toPromise()
            .then(response => {
              try {
                return response;
              } catch (e) {
                return response.toString();
              }
            })
            .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
