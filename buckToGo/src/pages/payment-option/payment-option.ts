import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-payment-option',
  templateUrl: 'payment-option.html'
})
export class PaymentOptionPage {
paymentOptions: string [];
paymentOptionChosen: string;
creditCardChosen: string;
creditCards: string [];
  constructor(

    public viewCtrl: ViewController
  ) {
    this.paymentOptions = [
    'Cash', 'Points', 'Credit Card'
  ]
    this.creditCards = [
      'Visa', 'MasterCard', 'American Express', 'Discover', 'Citibank', 'Capital One'
    ]
}

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
