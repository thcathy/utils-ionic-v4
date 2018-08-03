import { Component, OnInit } from '@angular/core';
import {StockHolding} from '../../entity/stock-holding';
import {AlertController} from '@ionic/angular';
import {StockService} from '../../service/stock.service';

@Component({
  selector: 'app-stock-manage-holding',
  templateUrl: './stock-manage-holding.page.html',
  styleUrls: ['./stock-manage-holding.page.scss'],
})
export class StockManageHoldingPage implements OnInit {
  holdings: StockHolding[];

  constructor(public alertController: AlertController,
              public stockService: StockService) { }

  ngOnInit() {
    this.stockService.getStockHoldings()
      .then(holdings => this.holdings = holdings);
  }

  onDelete(holding: StockHolding) {
    console.log(`delete holding: ${holding}`);
    this.stockService.deleteStockHolding(holding.id)
      .then(holdings => this.holdings = holdings);
  }

  async confirmDelete(holding: StockHolding) {
    const alert = await this.alertController.create({
      header: 'Confirm remove',
      subHeader: `${holding.side} ${holding.quantity} ${holding.code}`,
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'OK',
          handler: data => {
            this.onDelete(holding);
          }
        }]
    });

    await alert.present();
  }
}
