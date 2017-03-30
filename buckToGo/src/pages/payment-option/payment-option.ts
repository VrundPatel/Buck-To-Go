import { Component } from '@angular/core';
import { ModalController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-payment-option',
  templateUrl: 'payment-option.html'
})
export class PaymentOptionPage {
currentOrder;
paymentOptions: string [];
creditCardChosen: string;
creditCards: string [];
  constructor(

    public viewCtrl: ViewController, public navParams: NavParams, public modalCtrl: ModalController
  ) {
    this.currentOrder = navParams.data.currentOrder;

    this.paymentOptions = [
    'Cash', 'Points', 'Credit Card'
  ]
    this.creditCards = [
      'Visa', 'MasterCard', 'American Express', 'Discover', 'Citibank', 'Capital One'
    ]
}

  dismiss(){
    this.viewCtrl.dismiss();
  }

  orderFood(){

    this.dismiss();
  }

}
