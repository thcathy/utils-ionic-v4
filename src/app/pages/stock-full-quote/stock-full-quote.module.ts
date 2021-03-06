import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {StockFullQuotePage} from './stock-full-quote.page';

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
    declarations: [StockFullQuotePage],
})
export class StockFullQuotePageModule {}
