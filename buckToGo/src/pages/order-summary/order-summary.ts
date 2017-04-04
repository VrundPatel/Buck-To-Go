import { Component } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { StudentInfoPage } from '../student-info/student-info';
import { PaymentOptionPage } from '../payment-option/payment-option';

@Component({
  selector: 'page-order-summary',
  templateUrl: 'order-summary.html'
})
export class OrderSummaryPage {
  food;
  currentOrder;
  queue;
  public quantity: number;
  public total: number;
  public waitTime: number;

  constructor(
      public modalCtrl: ModalController,
      public navParams: NavParams,
      public af: AngularFire
  ) {
      // Initializes the current order and the queue passed in from the home page.
      // this.quantity = 1;
      this.food = this.navParams.data.order;
      this.currentOrder = this.navParams.data.currentOrder;
      this.queue = this.navParams.data.queue;
      console.log('Current Order' , this.currentOrder);
      this.calculateTotal();
      this.waitTime = Math.ceil((Math.random() * (5) + 3));
  }

  // Opens the modal to enter the payment info.
  payPayment(){
    let modal = this.modalCtrl.create(PaymentOptionPage, {
      currentOrder: this.currentOrder
    });
    modal.present();
  }

  // Opens the modal to enter the student info.
  studInfo(currentOrder) {
    let modal = this.modalCtrl.create(StudentInfoPage, {
        currentOrder: this.currentOrder
    });
    modal.present();
}

  // Calculates the total of the order.
  calculateTotal() {
      this.total = 0;
      for (let food of this.currentOrder.foodItems) {
          this.total += food.quantity * food.price;

      }
      this.currentOrder.total = this.total;
  }

  removeItem(i:number){
    this.currentOrder.foodItems.splice(i,1);
  }

  // Ordering the food, adding the order to the database.
  orderFood() {
      this.queue.push(this.currentOrder);
  }

}
