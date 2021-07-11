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
    selectedFund: Fund;
    selectedFee = 0;
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
        this.selectedFund = null;
        this.selectedFee = 0;
        this.updatedFund = null;
    }

    onSelectFund(fund: Fund) {
        this.selectedFund = fund;
    }

    onSelectFee(fee: number) {
        this.selectedFee = fee;
    }

    updateFundByHolding() {
        console.log('Add holding to :' + this.selectedFund.name);
        this.squoteService.updateFundByHolding(this.selectedFund.name, this.holding.id, this.selectedFee)
          .subscribe(f => {
                this.updatedFund = f;
                this.funds = [];
            },
            error => this.errorMessage = <any>error);
    }
}
