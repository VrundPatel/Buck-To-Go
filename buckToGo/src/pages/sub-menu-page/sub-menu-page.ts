import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-sub-menu-page',
  templateUrl: 'sub-menu-page.html'
})
export class SubMenuPage {

  item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.item = navParams.data.item;
      console.log(this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubMenuPagePage');
  }

}
