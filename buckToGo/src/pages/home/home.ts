import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { Order } from '../../app/order.model';

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
  currentOrder;
  // imageSrc: string[];

  constructor(public navCtrl: NavController, af: AngularFire) {
      // Accessing the data from Firebase
      this.menu = af.database.list('/menu');
      this.queue= af.database.list('/queue');
      this.currentOrder = {
        "studentName": "",
        "studentID": "",
        "items": [],
        "total": ""
      }

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

  showSubMenu(item) { this.navCtrl.push(SubMenuPage, {
      item: item,
      currentOrder: this.currentOrder
  }); }

  showOrderPage() { this.navCtrl.push(OrderSummaryPage, {
      currentOrder: this.currentOrder
  }); }

  showQueue(queue) { this.navCtrl.push(QueuePage, {
      queue: queue,
      currentOrder: this.currentOrder
  }); }
}
