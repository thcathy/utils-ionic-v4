import {Component, OnInit} from '@angular/core';
import {StockService} from '../../service/stock.service';
import {MarketDailyReport} from '../../entity/market-daily-report';
import {LoadingController, NavParams, PopoverController, ToastController} from '@ionic/angular';
import {StockQuote} from '../../entity/stock-quote';
import {StockHolding} from '../../entity/stock-holding';
import {Fund} from '../../entity/fund';

@Component({
    selector: 'app-stock-full-quote',
    templateUrl: './stock-full-quote.page.html',
    styleUrls: ['./stock-full-quote.page.scss'],
})
export class StockFullQuotePage implements OnInit {
    marketDailyReports: Map<string, MarketDailyReport>;
    indexQuotes: StockQuote[];
    stockQuotes: StockQuote[];
    holdings: StockHolding[];
    hsce: StockQuote;
    allQuotes: Map<string, StockQuote>;
    funds: Fund[];
    tbase: MarketDailyReport;

    codes: string;
    inProgress: boolean;
    loading: any;

    constructor(private stockService: StockService,
                public loadingCtrl: LoadingController,
                private popoverCtrl: PopoverController,
                private toastCtrl: ToastController) {
    }

    ngOnInit() {
        this.inProgress = true;
        this.showLoading();

        this.codes = localStorage.getItem('codes');

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

    async presentPopover(event: any) {
        const popover = await this.popoverCtrl.create({
            component: CodePopoverPage,
            event: event,
            componentProps: {parent: this},
        });
        return await popover.present();
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
        this.loading.dismiss();

        console.log(`Funds: ${JSON.stringify(this.funds)}`);
    }

    async showLoading() {
        this.loading = await this.loadingCtrl.create({
            message: 'Please wait...',
            duration: 3000
        });
        this.loading.present();
    }

    public onSubmit() {
        this.inProgress = true;
        this.showLoading();
        localStorage.setItem('codes', this.codes);

        this.stockService.getFullQuote(this.codes)
            .then(r => this.updateEntryFromResult(r));
    }

    public onLoadQuery() {
        this.stockService.loadQuery()
            .then(q => this.codes = q);
    }

    public onSaveQuery() {
        localStorage.setItem('codes', this.codes);
        this.stockService.saveQuery(this.codes)
            .then(q => this.presentToast(`saved query: ${q}`));
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

    async presentToast(text: string) {
        const toast = await this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    }

    reportKeys(): Array<string> {
        if (this.marketDailyReports) {
            return Object.keys(this.marketDailyReports);
        } else {
            return [];
        }
    }
}

@Component({
  template: `
      <ion-list style="padding: 0px; margin:0px;">
          <ion-item (click)="save()">
              <ion-label>Save</ion-label>
          </ion-item>
          <ion-item (click)="load()">
              <ion-label>Load</ion-label>
          </ion-item>
      </ion-list>`
})
export class CodePopoverPage {
    parent: StockFullQuotePage;
    popover: any;

    constructor(
        private navParams: NavParams) {
        this.parent = this.navParams.get('parent');
        this.popover = this.navParams.get('popover');
    }

    save() {
        this.popover.dismiss();
        this.parent.onSaveQuery();
    }

    load() {
        this.popover.dismiss();
        this.parent.onLoadQuery();
    }

}
