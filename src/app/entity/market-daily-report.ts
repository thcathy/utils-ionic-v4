import {StockQuote} from './stock-quote';

export class MarketDailyReport {
  constructor(
    public date: number,
    public hsi: StockQuote,
    public hscei: StockQuote
  ) { }

  public toString() {
    return JSON.stringify(this);
  }
}
