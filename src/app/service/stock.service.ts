import {StockHolding} from '../entity/stock-holding';
import {StockQuote} from '../entity/stock-quote';
import {MarketDailyReport} from '../entity/market-daily-report';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {NGXLogger} from 'ngx-logger';

@Injectable({ providedIn: 'root' })
export class StockService {
  private LIST_HOLDING_URL = environment.apiHost + '/rest/stock/holding/list';  // URL to web API
  private DELETE_HOLDING_URL = environment.apiHost + '/rest/stock/holding/delete/';
  private STOCK_PERFORMANCE_URL = environment.apiHost + '/rest/stock/liststocksperf';
  private MARKET_DAILY_REPORT_URL = environment.apiHost + '/rest/stock/marketreports';
  private INDEX_QUOTE_URL = environment.apiHost + '/rest/stock/indexquotes';
  private FULL_QUOTE_URL = environment.apiHost + '/rest/stock/fullquote';
  private SAVE_QUERY_URL = environment.apiHost + '/rest/stock/save/query';
  private LOAD_QUERY_URL = environment.apiHost + '/rest/stock/load/query';

  constructor (
      private http: HttpClient,
      public logger: NGXLogger
  ) {}

  getStockHoldings(): Promise<StockHolding[]> {
    return this.http.get(this.LIST_HOLDING_URL)
      .toPromise()
      .then(response => response as StockHolding[])
      .catch(this.handleError);
  }

  deleteStockHolding(id: string): Promise<StockHolding[]> {
    return this.http.get(this.DELETE_HOLDING_URL + id)
      .toPromise()
      .then(response => response as StockHolding[])
      .catch(this.handleError);
  }

  getStockPerformanceQuotes(): Promise<StockQuote[]> {
    return this.http.get(this.STOCK_PERFORMANCE_URL)
      .toPromise()
      .then(response => response as StockQuote[])
      .catch(this.handleError);
  }

  getMarketDailyReport(): Promise<Map<string, MarketDailyReport>> {
    return this.http.get(this.MARKET_DAILY_REPORT_URL)
      .toPromise()
      .then(response => response as Map<string, MarketDailyReport>)
      .catch(this.handleError);
  }

  getFullQuote(codes: string): Promise<Map<string, object>> {
    if (codes == null) { codes = ''; }

    return this.http.get(this.FULL_QUOTE_URL + '?codes=' + codes)
      .toPromise()
      .then(response => response as Map<string, object>)
      .catch(this.handleError);
  }

  getIndexQuotes(): Promise<StockQuote[]> {
    return this.http.get(this.INDEX_QUOTE_URL)
      .toPromise()
      .then(response => response as StockQuote[])
      .catch(this.handleError);
  }

  saveQuery(codes: string): Promise<string> {
    if (codes == null) { codes = ''; }

    return this.http.get(this.SAVE_QUERY_URL + '?codes=' + codes, {responseType: 'text'})
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  loadQuery(): Promise<string> {
    return this.http.get(this.LOAD_QUERY_URL, {responseType: 'text'})
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    this.logger.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
