import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-payment-option',
  templateUrl: 'payment-option.html'
})
export class PaymentOptionPage {
paymentOptions: string [];
paymentOptionChosen: string;
  constructor(

    public viewCtrl: ViewController
  ) {this.paymentOptions = [
    'Cash', 'Points', 'Credit Card'
  ]}

  paymentOption(){
    console.log('payment', this.paymentOptionChosen);
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  orderFood(){

    this.dismiss();
  }

}
