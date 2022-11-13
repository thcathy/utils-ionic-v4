import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {StockFullQuotePage} from './stock-full-quote.page';
import {FundHoldingRowComponent} from '../../components/fund-holding-row/fund-holding-row.component';
import {HoldingRowComponent} from '../../components/holding-row/holding-row.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: StockFullQuotePage
            }
        ])
    ],
    declarations: [StockFullQuotePage, FundHoldingRowComponent, HoldingRowComponent],
})
export class StockFullQuotePageModule {}
