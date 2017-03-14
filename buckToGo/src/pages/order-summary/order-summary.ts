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
  currentOrder;
  public total: number;
  public waitTime: number;

  constructor(
      public modalCtrl: ModalController,
      public navParams: NavParams,
      public af: AngularFire
  ) {
      this.currentOrder = this.navParams.data.currentOrder;
      this.calculateTotal();
      this.waitTime = Math.ceil((Math.random() * (5) + 3));
  }

  payPayment(){
    let modal = this.modalCtrl.create(PaymentOptionPage);
    modal.present();
  }

  studInfo() {
    let modal = this.modalCtrl.create(StudentInfoPage);
    modal.present();
  }

  calculateTotal() {
      this.total = 0;
      for (var food of this.currentOrder.items) {
          this.total += food.quantity * food.price;
      }
  }

}
