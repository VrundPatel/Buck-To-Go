import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { SubMenuPage } from '../sub-menu-page/sub-menu-page';
import { OrderSummaryPage } from '../order-summary/order-summary';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  menu: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, af: AngularFire) {
      this.menu = af.database.list('/menu');
  }

  showSubMenu(item) {
      this.navCtrl.push(SubMenuPage, { item: item });
  }

  showOrderPage() {
      this.navCtrl.push(OrderSummaryPage);
  }
}
