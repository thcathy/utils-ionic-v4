import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import {HoldingStock} from '../entity/holding-stock';
import {Fund} from '../entity/fund';
import {ENV} from "@app/env";

import 'rxjs/add/operator/do';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class SquoteService {
    constructor (private http: HttpClient) {
    }

    private createHoldingStockUrl = ENV.apiHost + '/rest/createholding/create/?';  // URL to web api
    private updateFundByHoldingUrl = ENV.apiHost + '/rest/createholding/updatefund/?';

    createHoldingStock(message: string, hscei: string) {
        let queryString = 'message=' + encodeURIComponent(message) + '&hscei=' + hscei;
        return this.http.get(this.createHoldingStockUrl + queryString)
            .do(resp => console.info('createHoldingStock response: ' + resp))
            .map(res => <HoldingStock> res)
            .catch(this.handleError);
    }

    updateFundByHolding(fundName: string, holdingId: string) {
        let queryString = 'fundName=' + fundName + '&holdingId=' + encodeURIComponent(holdingId);
        console.log(queryString);
        return this.http.get(this.updateFundByHoldingUrl + queryString)
            .do(resp => console.info('updateFundByHolding response: ' + resp))
            .map(res => <Fund> res)
            .catch(this.handleError);
    }

    private handleError (error: any) {
        console.error(error.message);
        return Observable.throw(error._body);
    }
}
