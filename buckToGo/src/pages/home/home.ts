import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { SubMenuPage } from '../sub-menu-page/sub-menu-page';
import { OrderSummaryPage } from '../order-summary/order-summary';
import { QueuePage } from '../queue/queue';
import * as firebase from 'firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  menu: FirebaseListObservable<any>;
  queue: FirebaseListObservable<any>;
  currentOrder: Object;
  imageSrc: string[];

  constructor(public navCtrl: NavController, af: AngularFire) {
      // Accessing the data from Firebase
      this.menu = af.database.list('/menu');
      this.queue= af.database.list('/queue');
      this.currentOrder = {
        "foodItems": [],
        "customer": {
            "firstName": "",
            "lastName": "",
            "phoneNumber": "",
            "studentID": ""
        },
        "payment": {},
        "comments": ""
      };
      console.log(this.currentOrder);

      this.imageSrc = [
          "assets/images/0.jpeg",
          "assets/images/1.jpeg",
          "assets/images/2.jpeg",
          "assets/images/3.jpeg",
          "assets/images/4.jpeg",
          "assets/images/5.jpeg",
      ]

  }

  // Navigating to the sub menu page
  // PARAMS:
  //    item => the category clicked on
  //    currentOrder +> the currentOrder object
  showSubMenu(item) { this.navCtrl.push(SubMenuPage, {
      item: item,
      currentOrder: this.currentOrder
  }); }

  // Navigating to the sub menu page
  // PARAMS:
  //    queue => the current queue from the backend
  //    currentOrder => the currentOrder object
  showOrderPage() { this.navCtrl.push(OrderSummaryPage, {
      queue: this.queue,
      currentOrder: this.currentOrder
  }); }

}
