import { Component } from '@angular/core';
import { Platform, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item-order',
  templateUrl: 'item-order.html'
})
export class ItemOrderPage {
    food;
    public quantity: number;
    public subtotal: number;

  constructor(
    public platform: Platform,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.food = this.navParams.data.food;
    this.quantity = 1;
    this.calculateSubTotal();
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  addToOrder(food){
    // alert(food);
    this.dismiss();
  }

  public calculateSubTotal() {
      this.subtotal = this.quantity * this.food['price'];
  }

}
