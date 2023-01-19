import {Component, OnInit} from '@angular/core';
import {HoldingStock} from '../../entity/holding-stock';
import {SquoteService} from '../../service/squote.service';
import {MyAuthService} from '../../service/my-auth.service';

@Component({
    selector: 'app-stock-create-holding',
    templateUrl: './stock-create-holding.page.html',
    styleUrls: ['./stock-create-holding.page.scss'],
})
export class StockCreateHoldingPage implements OnInit {
    message: string;
    hscei: string;
    errorMessage: string;
    createdHolding: HoldingStock;

    constructor(private squoteService: SquoteService,
                private authService: MyAuthService) {
        this.message = '';
        this.hscei = '';
    }

    ngOnInit() {
        if (!this.authService.requireAuthenticated()) {
            return;
        }
    }

    onSubmit() {
        this.errorMessage = '';
        console.log('Submit: ', this.message, this.hscei);
        this.squoteService.createHoldingStock(this.message, this.hscei)
            .subscribe(
                holding => this.createdHolding = holding,
                error => this.errorMessage = error as any);
    }

    onClear() {
        this.message = '';
        this.hscei = '';
        this.errorMessage = '';
        this.createdHolding = null;
    }

    addToMessage(string: string) {
        this.message += ' ' + string;
    }
}
