import {Component, Input, OnChanges, SimpleChange} from '@angular/core';
import {NGXLogger} from 'ngx-logger';
import {HoldingStock} from '../../entity/holding-stock';
import {Fund} from '../../entity/fund';
import {SquoteService} from '../../service/squote.service';
import {FundService} from '../../service/fund.service';

@Component({
    selector: 'app-select-fund',
    templateUrl: './select-fund.component.html',
    styleUrls: ['./select-fund.component.scss']
})
export class SelectFundComponent implements OnChanges {
    @Input() holding: HoldingStock;
    errorMessage: string;
    funds: Fund[];
    updatedFund: Fund;

    constructor(
        public squoteService: SquoteService,
        public fundService: FundService,
        public logger: NGXLogger
    ) {}

    ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        this.funds = [];
        this.fundService.getFunds()
            .subscribe(
                funds => this.funds = funds,
                error => this.errorMessage = <any>error
            );
    }

    onSelectFund(fund: Fund) {
        console.log('Add holding to :' + fund.name);
        this.squoteService.updateFundByHolding(fund.name, this.holding.id)
            .subscribe(f => {
                    this.updatedFund = f;
                    this.funds = [];
                },
                error => this.errorMessage = <any>error);
    }

}
