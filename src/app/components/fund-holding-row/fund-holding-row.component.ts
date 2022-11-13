import {Component, Input, OnInit} from '@angular/core';
import {FundHolding} from '../../entity/fund-holding';

@Component({
  selector: 'app-fund-holding-row',
  templateUrl: './fund-holding-row.component.html',
  styleUrls: ['./fund-holding-row.component.scss'],
})
export class FundHoldingRowComponent implements OnInit {
  @Input() stockCode: string;
  @Input() holding: FundHolding;
  @Input() showMore: boolean;

  constructor() { }

  ngOnInit() {}

}
