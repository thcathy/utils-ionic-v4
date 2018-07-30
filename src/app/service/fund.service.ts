import { Injectable }              from '@angular/core';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Fund} from "../entity/fund";
import {ENV} from "@app/env";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FundService {
  private ALL_FUND_URL = ENV.apiHost + '/rest/fund/getall';

  constructor (private http: HttpClient) {}

  getFunds(): Observable<Fund[]> {
    return this.http.get<Fund[]>(this.ALL_FUND_URL);
  }

  submitRequest(request: string): Promise<string> {
    if (request.slice(-1) != '/') request += '/';
    console.log(`calling fund request url ${request}`);
    return this.http.get(ENV.apiHost + '/rest/fund/' + request)
            .toPromise()
            .then(response => {
              try {
                return JSON.stringify(response);
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
