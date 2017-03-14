import { Component } from '@angular/core';
import { Platform, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item-order',
  templateUrl: 'item-order.html'
})
export class ItemOrderPage {
    food;
    currentOrder;
    public quantity: number;
    public subtotal: number;

  constructor(
    public platform: Platform,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.food = this.navParams.data.food;
    this.currentOrder = this.navParams.data.currentOrder;
    this.quantity = 1;
    this.calculateSubTotal();
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  addToOrder(food){
    // Add the food item to the queue for this order.
    this.food.quantity = +this.quantity;
    this.currentOrder.items.push(food);
    console.log(food);
    this.dismiss();
  }

  public calculateSubTotal() {
      this.subtotal = this.quantity * this.food.price;
  }

}
