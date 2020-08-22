import {Component, Input, OnInit} from '@angular/core';
import {StockQuote} from '../../entity/stock-quote';
import {ModalController, NavParams, PopoverController, ToastController} from '@ionic/angular';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {KeyValue} from '@angular/common';
import {StockService} from '../../service/stock.service';

@Component({
  selector: 'app-stock-quote-settings',
  templateUrl: './stock-quote-settings.component.html',
  styleUrls: ['./stock-quote-settings.component.scss'],
})
export class StockQuoteSettingsComponent implements OnInit {
  static SelectedIndexCodekey = 'thc_selected_index_code';

  stockCodesForm: FormGroup;

  @Input() indexes: StockQuote[];
  @Input() inputCodes: string[];
  selectedIndexCode: string[];

  constructor(
    private stockService: StockService,
    private modalController: ModalController,
    private popoverController: PopoverController,
    private toastController: ToastController,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const selectedIndexCode = localStorage.getObject(StockQuoteSettingsComponent.SelectedIndexCodekey);
    this.selectedIndexCode = selectedIndexCode || [];
    console.log(`init selectedIndexCode: ${this.selectedIndexCode}`);

    this.stockCodesForm = this.formBuilder.group({
      codes: this.formBuilder.array([])
    });
    this.inputCodes.forEach(v => this.addControl(v));
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

  keyAscOrder = (a: KeyValue<string, any>, b: KeyValue<string, any>): number => +a.key - +b.key;

  dismiss() {
    console.log(`store selectedIndexCode: ${this.selectedIndexCode}`);
    console.log(`this.codeControls.value: ${JSON.stringify(this.codes.value)}`);
    localStorage.setObject(StockQuoteSettingsComponent.SelectedIndexCodekey, this.selectedIndexCode);
    this.modalController.dismiss({
      'dismissed': true,
      'selectedIndexCode': this.selectedIndexCode,
      'stockCodes': this.codes.value.filter(v => v !== '').join(','),
    });
  }

  get codes() { return this.stockCodesForm.get('codes') as FormArray; }

  addControl(value = '') {
    const newControl = this.formBuilder.control('');
    newControl.setValue(value);
    this.codes.push(newControl);
  }

  removeCodesControlAt(index: number) {
    this.codes.removeAt(index);
  }

  async presentCodesSaveLoadPopover(event: any) {
    const popover = await this.popoverController.create({
      component: CodePopoverMenu,
      event: event,
      componentProps: {parent: this},
    });
    return await popover.present();
  }

  public loadStockCodeFromServer() {
    this.stockService.loadQuery()
      .then(q => {
        this.codes.clear();
        JSON.parse(q).forEach(v => this.addControl(v));
      });
  }

  public saveStockCodeToServer() {
    this.stockService.saveQuery(JSON.stringify(this.codes.value))
      .then(q => this.presentToast(`saved query: ${q}`));
  }

  async presentToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}

@Component({
  template: `
      <ion-list style="padding: 0px; margin:0px;">
          <ion-item (click)="save()">
              <ion-icon name="cloud-upload-outline"></ion-icon><span style="padding-left: 8px;">Save to server</span>
          </ion-item>
          <ion-item (click)="load()">
              <ion-icon name="cloud-download-outline"></ion-icon><span style="padding-left: 8px;">Load from server</span>
          </ion-item>
      </ion-list>`
})
export class CodePopoverMenu {
  parent: StockQuoteSettingsComponent;
  popover: any;

  constructor(
    private navParams: NavParams) {
    this.parent = this.navParams.get('parent');
    this.popover = this.navParams.get('popover');
  }

  save() {
    this.popover.dismiss();
    this.parent.saveStockCodeToServer();
  }

  load() {
    this.popover.dismiss();
    this.parent.loadStockCodeFromServer();
  }

}
