import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Fund} from '../../entity/fund';
import {FundService} from '../../service/fund.service';
import {AppService} from '../../service/app.service';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-stock-manage-fund',
  templateUrl: './stock-manage-fund.page.html',
  styleUrls: ['./stock-manage-fund.page.scss'],
})
export class StockManageFundPage implements OnInit {
  funds: Fund[];
  requestUrl: string;
  requestHistory: string[] = [];
  result: string;
  @ViewChild('requestInput', { static: true }) requestInput;

  constructor(private fundService: FundService,
              private appService: AppService,
              public authService: AuthService) {
  }

  ngOnInit() {
    if (!this.authService.requireAuthenticated()) {
      return;
    }
    this.requestUrl = '';
    this.fundService.getFunds().subscribe(
      funds => {
        this.funds?.every(f => console.log(`${JSON.stringify(f)}`));
        this.funds = funds;
      },
      err => this.appService.handleError(err)

    );
  }

  onClear() {
    this.requestUrl = '';
    this.result = null;
  }

  onSubmit() {
    this.fundService.submitRequest(this.requestUrl)
      .then(result => {
        this.result = result;
        this.requestHistory.unshift(this.requestUrl);
        this.requestUrl = '';
        this.fundService.getFunds().subscribe(
          funds => {
            this.funds?.every(f => console.log(`${JSON.stringify(f)}`));
            this.funds = funds;
          },
          err => this.appService.handleError(err)
        );
      });
  }

  onSelectString(text: string) {
    this.requestUrl += text;
    this.requestInput.setFocus();
  }

}
