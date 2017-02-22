import { Component } from '@angular/core';
import { ModalController, Platform, ViewController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { StudentInfoPage } from '../student-info/student-info';

@Component({
  selector: 'page-order-summary',
  templateUrl: 'order-summary.html'
})
export class OrderSummaryPage {

  itemsOrdered: FirebaseListObservable<any>;

  constructor(
      public modalCtrl: ModalController,
      public navParams: NavParams,
      public af: AngularFire
  ) {
      this.itemsOrdered = af.database.list('/queue/0/items');
  }

  studInfo() {
    let modal = this.modalCtrl.create(StudentInfoPage);
    modal.present();
  }

}
