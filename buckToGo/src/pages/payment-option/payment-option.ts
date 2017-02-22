import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-payment-option',
  templateUrl: 'payment-option.html'
})
export class PaymentOptionPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {}

  dismiss(){
    this.viewCtrl.dismiss();
  }

  orderFood(){
    alert("Hallo");
    this.dismiss();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad PaymentOptionPage');
  // }

}
