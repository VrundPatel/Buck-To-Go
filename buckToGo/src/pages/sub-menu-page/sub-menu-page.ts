import { Component } from '@angular/core';
import { ModalController, Platform, ViewController, NavParams } from 'ionic-angular';
import { ItemOrderPage } from '../item-order/item-order';

@Component({
  selector: 'page-sub-menu-page',
  templateUrl: 'sub-menu-page.html'
})
export class SubMenuPage {

  item;

  constructor(public modalCtrl: ModalController, public navParams: NavParams) {
    this.item = this.navParams.data.item;
  }

  orderItem(food){
    let modal = this.modalCtrl.create(ItemOrderPage, {food: food});
    modal.present();
  }

}
