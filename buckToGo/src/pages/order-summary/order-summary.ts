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
  public total: number;

  constructor(
      public modalCtrl: ModalController,
      public navParams: NavParams,
      public af: AngularFire
  ) {
      this.itemsOrdered = af.database.list('/queue/0/items');
      this.calculateTotal();
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
      this.itemsOrdered.subscribe((order) => {
          order.forEach((foodItem) => {
              this.total += foodItem['quantity'] * foodItem['price'];
              console.log(foodItem);
              console.log('hello');
          });
    });
  }

}
