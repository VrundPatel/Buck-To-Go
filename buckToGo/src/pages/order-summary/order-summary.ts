import { Component } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { StudentInfoPage } from '../student-info/student-info';
import { PaymentOptionPage } from '../payment-option/payment-option';

@Component({
  selector: 'page-order-summary',
  templateUrl: 'order-summary.html'
})
export class OrderSummaryPage {

  itemsOrdered: FirebaseListObservable<any>;

  constructor(
      public modalCtrl: ModalController,
      public navParams: NavParams,
      public af: AngularFire
  ) {
      this.itemsOrdered = af.database.list('/queue/0/items');
  }

  payPayment(){
    let modal = this.modalCtrl.create(PaymentOptionPage);
    modal.present();
  }

  studInfo() {
    let modal = this.modalCtrl.create(StudentInfoPage);
    modal.present();
  }

}
