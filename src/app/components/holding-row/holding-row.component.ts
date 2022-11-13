import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CalculateExtension} from '../../../utils/utils';
import {StockHolding} from '../../entity/stock-holding';
import {IonModal} from '@ionic/angular';

@Component({
  selector: 'app-holding-row',
  templateUrl: './holding-row.component.html',
  styleUrls: ['./holding-row.component.scss'],
})
export class HoldingRowComponent implements OnInit {
  @Input() showMore: boolean;
  @Input() holding: StockHolding;
  @Input() spotPrice: number;
  @Input() hsceSpotPrice: number;

  @ViewChild('diffPercentageModal') diffPercentageModal: IonModal;

  constructor() { }

  ngOnInit() {}

  changePercentage() {
    return CalculateExtension.changePercentage(this.holding.price, this.spotPrice);
  }

  relativePerformance(): number {
    return CalculateExtension.relativePerformance(this.holding, this.spotPrice, this.hsceSpotPrice);
  }

  showDiffPercentageModal() {
    this.diffPercentageModal.present();
  }

}
