export class StockHolding {
  constructor(
    public id: string,
    public code: string,
    public quantity: number,
    public gross: number,
    public date: Date,
    public hsce: number,
    public side: string
  ) { }

  public toString() {
    return JSON.stringify(this);
  }
}
