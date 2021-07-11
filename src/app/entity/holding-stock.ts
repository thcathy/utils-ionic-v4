export class HoldingStock {
  constructor(
    public id: string,
    public quanity: number,
    public gross: number,
    public date: Date,
    public hsce: number,
    public side: string,
    public code: string,
    public fees: Map<string, number>,
  ) { }
}
