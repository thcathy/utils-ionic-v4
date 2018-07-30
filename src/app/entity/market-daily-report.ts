import {MonetaryBase} from "./monetory-base";
import {StockQuote} from "./stock-quote";

export class MarketDailyReport {
  constructor(
    public date: number,
    public moneyBase: MonetaryBase,
    public hsi: StockQuote,
    public hscei: StockQuote
  ) { }

  public toString() {
    return JSON.stringify(this);
  }
}
