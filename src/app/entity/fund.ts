import {HoldingStock} from './holding-stock';

export class Fund {
  constructor(
    public name: string,
    public date: Date,
    public profit: number,
    public netProfit: number,
    public cashoutAmount: number,
    public holdings: Map<string, HoldingStock>,
    public type: string,
  ) { }

  public toString() {
    return JSON.stringify(this);
  }
}
