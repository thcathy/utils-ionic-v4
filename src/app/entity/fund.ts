import {HoldingStock} from "./holding-stock";

export class Fund {
  constructor(
    public name: string,
    public date: Date,
    public profit: number,
    public netProfit: number,
    public holdings: Map<string, HoldingStock>
  ) { }

  public toString() {
    return JSON.stringify(this);
  }
}
