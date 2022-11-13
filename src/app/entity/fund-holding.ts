export class FundHolding {
  constructor(
    public code: string,
    public quantity: number,
    public gross: number,
    public date: Date,
    public price: number,
    public netProfit: number,
    public spot: number,
  ) { }

  public toString() {
    return JSON.stringify(this);
  }
}
