import { Component } from '@angular/core';
import { ModalController, Platform, ViewController, NavParams } from 'ionic-angular';
// import { PaymentOptionPage } from '../payment-option/payment-option';

@Component({
  selector: 'page-student-info',
  templateUrl: 'student-info.html'
})
export class StudentInfoPage {
pay;
  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {this.pay = this.navParams.data.pay;}

  // payPayment(){
  //   let modal = this.modalCtrl.create(PaymentOptionPage);
  //   modal.present();
  // }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  requirmentInfo(){
    // this.payPayment();
    this.dismiss();
  }

}
