import {HoldingStock} from '../entity/holding-stock';
import {Fund} from '../entity/fund';

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {catchError, tap, map} from 'rxjs/operators';
import {NGXLogger} from 'ngx-logger';
import {throwError} from 'rxjs/internal/observable/throwError';


@Injectable({providedIn: 'root'})
export class SquoteService {
    constructor(
        public http: HttpClient,
        public logger: NGXLogger
    ) {
    }

    private createHoldingStockUrl = environment.apiHost + '/rest/createholding/create/?';  // URL to web api
    private updateFundByHoldingUrl = environment.apiHost + '/rest/createholding/updatefund/?';

    createHoldingStock(message: string, hscei: string) {
        const queryString = 'message=' + encodeURIComponent(message) + '&hscei=' + hscei;
        return this.http.get(this.createHoldingStockUrl + queryString)
            .pipe(
                tap(resp => this.logger.debug('createHoldingStock response: ' + resp)),
                map(res => <HoldingStock> res),
                catchError(this.handleError)
            );
    }

    updateFundByHolding(fundName: string, holdingId: string, fee: number = 0) {
        const queryString = 'fundName=' + fundName + '&holdingId=' + encodeURIComponent(holdingId) + '&fee=' + fee;
        console.log(queryString);
        return this.http.get(this.updateFundByHoldingUrl + queryString)
            .pipe(
                tap(resp => console.log('updateFundByHolding response: ' + resp)),
                map(res => <Fund> res),
                catchError(this.handleError)
            );
    }

    private handleError(error: any) {
        console.error(error.message);
        return throwError(error._body);
    }
}
