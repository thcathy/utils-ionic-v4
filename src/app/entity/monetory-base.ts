export class MonetaryBase {
  constructor(
    public indebtedness: number,
    public notes: number,
    public closingBalance: number,
    public exchangeFund: number,
    public total: number
  ) { }

  public toString() {
    return JSON.stringify(this);
  }
}
