import {StockHolding} from '../app/entity/stock-holding';

export namespace CalculateExtension {
    export function changePercentage(price: number, spot: number): number {
        return (spot - price) / price * 100;
    }

    export function relativePerformance(holding: StockHolding, spot: number, hsceSpot: number): number {
        const factor = (holding.side === 'BUY') ? 1 : -1;
        return (changePercentage(holding.gross / holding.quantity, spot) - changePercentage(holding.hsce, hsceSpot)) * factor;
    }
}
