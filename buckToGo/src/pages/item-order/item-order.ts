import { Component } from '@angular/core';
import { ModalController, Platform, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item-order',
  templateUrl: 'item-order.html'
})
export class ItemOrderPage {
food;
  constructor(
    public platform: Platform,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.food = this.navParams.data.food;
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
}
