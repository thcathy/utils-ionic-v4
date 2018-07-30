export class FundHolding {
  constructor(
    public code: string,
    public quanity: number,
    public gross: number,
    public date: Date,
    public spotPrice: number,
    public netProfit: number
  ) { }

  public toString() {
    return JSON.stringify(this);
  }
}
