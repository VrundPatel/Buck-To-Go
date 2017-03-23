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
  // imageSrc: string[];

  constructor(public navCtrl: NavController, af: AngularFire) {
      // Accessing the data from Firebase
      this.menu = af.database.list('/menu');
      this.queue= af.database.list('/queue');
      this.currentOrder = {
        "foodItems": [],
        "customer": {},
        "payment": {},
        "comments": ""
      };
      console.log(this.currentOrder);

      // Storage reference
    //   for (let i = 0; i < 4; i++) {
    //       let image: string;
    //       let str = String(i) + '.jpeg';
    //       const storageRef = firebase.storage().refFromURL('gs://buck-to-go.appspot.com/1.jpeg');
    //       storageRef.getDownloadURL().then(url => image = url);
    //       console.log(image);
    //     //   this.imageSrc[i] = image;
    //   }
    //   console.log(this.imageSrc);

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
