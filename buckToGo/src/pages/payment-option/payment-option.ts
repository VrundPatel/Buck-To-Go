import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-payment-option',
  templateUrl: 'payment-option.html'
})
export class PaymentOptionPage {

  constructor(

    public viewCtrl: ViewController
  ) {}

  dismiss(){
    this.viewCtrl.dismiss();
  }

  orderFood(){

    this.dismiss();
  }

}
