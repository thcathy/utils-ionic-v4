import {Component, OnInit} from '@angular/core';
import {StockService} from '../../service/stock.service';
import {MarketDailyReport} from '../../entity/market-daily-report';
import {ModalController, PopoverController, ToastController} from '@ionic/angular';
import {StockQuote} from '../../entity/stock-quote';
import {StockHolding} from '../../entity/stock-holding';
import {Fund} from '../../entity/fund';
import {StockQuoteSettingsComponent} from '../../components/stock-quote-settings/stock-quote-settings.component';

@Component({
    selector: 'app-stock-full-quote',
    templateUrl: './stock-full-quote.page.html',
    styleUrls: ['./stock-full-quote.page.scss'],
})
export class StockFullQuotePage implements OnInit {
    marketDailyReports: Map<string, MarketDailyReport>;
    indexQuotes: StockQuote[] = [];
    stockQuotes: StockQuote[];
    holdings: StockHolding[];
    hsce: StockQuote;
    allQuotes: Map<string, StockQuote>;
    funds: Fund[];
    tbase: MarketDailyReport;

    codes: string;
    inProgress: boolean;
    seletedIndexCode: string[];

    constructor(public stockService: StockService,
                public popoverCtrl: PopoverController,
                public toastCtrl: ToastController,
                public modalController: ModalController) {
    }

    ngOnInit() {
        this.inProgress = true;

        this.codes = localStorage.getItem('codes');
        this.seletedIndexCode = localStorage.getObject(StockQuoteSettingsComponent.SelectedIndexCodekey);

        this.stockService.getMarketDailyReport()
            .then(reports => {
                this.marketDailyReports = reports;
                if (this.marketDailyReports != null) {
                    this.tbase = this.marketDailyReports['T'];
                    delete this.marketDailyReports['T'];
                }
            });

        this.stockService.getFullQuote(this.codes)
            .then(r => this.updateEntryFromResult(r));
    }

    updateEntryFromResult(result) {
        this.indexQuotes = result['indexes'];
        this.hsce = this.indexQuotes.find(i => i.stockCode === 'HSCEI');
        this.stockQuotes = result['quotes'];
        this.holdings = result['holdings'];
        this.allQuotes = result['allQuotes'];
        this.funds = result['funds'];
        this.codes = result['codes'];
        this.inProgress = false;

        console.log(`Funds: ${JSON.stringify(this.funds)}`);
    }

    public onSubmit() {
        this.inProgress = true;
        localStorage.setItem('codes', this.codes);

        this.stockService.getFullQuote(this.codes)
            .then(r => this.updateEntryFromResult(r));
    }

    public relativePerformance(holding: StockHolding, spot: number, hsceSpot: number): number {
        const factor = (holding.side === 'BUY') ? 1 : -1;
        return (this.changePercentage(holding.gross / holding.quantity, spot) - this.changePercentage(holding.hsce, hsceSpot)) * factor;
    }

    public changePercentage(price: number, spot: number) {
        return (spot - price) / price * 100;
    }

    public fundHoldingKeys(fund) {
        if (fund != null && fund.holdings != null) {
            return Object.keys(fund.holdings);
        }
    }

    public fundGross(fund): number {
        let sum = 0;
        Object.keys(fund.holdings).forEach(k => sum += fund.holdings[k].gross);
        return sum;
    }

    reportKeys(): Array<string> {
        if (this.marketDailyReports) {
            return Object.keys(this.marketDailyReports);
        } else {
            return [];
        }
    }

    filteredIndexQuotes() {
        if (!this.indexQuotes) { return []; }
        return this.indexQuotes.filter(index => !this.seletedIndexCode || this.seletedIndexCode.includes(index.stockCode));
    }

    async presentSettings() {
        if (!this.indexQuotes) { return; }

        const modal = await this.modalController.create({
            component: StockQuoteSettingsComponent,
            componentProps: {
                'indexes': this.indexQuotes,
                'inputCodes': this.codes.split(','),
            }
        });
        await modal.present();
        const { data } = await modal.onWillDismiss();
        console.log(data);
        this.seletedIndexCode = data.selectedIndexCode;
        const needRefresh = data.stockCodes !== this.codes;
        this.codes = data.stockCodes;
        if (needRefresh) { this.onSubmit(); }
    }
}
