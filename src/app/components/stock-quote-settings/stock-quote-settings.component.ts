import {Component, Input, OnInit} from '@angular/core';
import {StockQuote} from '../../entity/stock-quote';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-stock-quote-settings',
  templateUrl: './stock-quote-settings.component.html',
  styleUrls: ['./stock-quote-settings.component.scss'],
})
export class StockQuoteSettingsComponent implements OnInit {
  static SelectedIndexCodekey = 'thc_selected_index_code';

  @Input() indexes: StockQuote[];
  selectedIndexCode: string[];

  constructor(
    public modalController: ModalController
  ) {}

  ngOnInit() {
    const selectedIndexCode = localStorage.getObject(StockQuoteSettingsComponent.SelectedIndexCodekey);
    this.selectedIndexCode = selectedIndexCode || [];
    console.log(`init selectedIndexCode: ${this.selectedIndexCode}`);
  }

  toggleChanged(index: StockQuote) {
    const pos = this.selectedIndexCode.indexOf(index.stockCode, 0);
    if (pos > -1) {
      this.selectedIndexCode.splice(pos, 1);
    } else {
      this.selectedIndexCode.push(index.stockCode);
    }
    console.log(`selectedIndexCode ${this.selectedIndexCode}`);
  }

  isSelected(index: StockQuote): boolean {
    return this.selectedIndexCode.includes(index.stockCode);
  }

  dismiss() {
    console.log(`store selectedIndexCode: ${this.selectedIndexCode}`);
    localStorage.setObject(StockQuoteSettingsComponent.SelectedIndexCodekey, this.selectedIndexCode);
    this.modalController.dismiss({
      'dismissed': true,
      'selectedIndexCode': this.selectedIndexCode,
    });
  }
}
