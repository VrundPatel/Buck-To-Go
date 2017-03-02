import { Component } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';
import { ItemOrderPage } from '../item-order/item-order';

@Component({
  selector: 'page-sub-menu-page',
  templateUrl: 'sub-menu-page.html'
})
export class SubMenuPage {
  item;
  currentOrder;

  constructor(public modalCtrl: ModalController, public navParams: NavParams) {
    this.item = this.navParams.data.item;
    this.currentOrder = this.navParams.data.currentOrder;
    console.log('Current order:');
    console.log(this.currentOrder);
  }

  orderItem(food, currentOrder){
    let modal = this.modalCtrl.create(ItemOrderPage, {
        food: food,
        currentOrder: this.currentOrder
    });
    modal.present();
  }

  ionViewDidLoad() { }
}
