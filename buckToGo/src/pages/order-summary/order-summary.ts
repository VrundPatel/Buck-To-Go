import { Component } from '@angular/core';
import { ModalController, Platform, ViewController, NavParams } from 'ionic-angular';
import { StudentInfoPage } from '../student-info/student-info';

@Component({
  selector: 'page-order-summary',
  templateUrl: 'order-summary.html'
})
export class OrderSummaryPage {

  //item;

  constructor(public modalCtrl: ModalController, public navParams: NavParams) {
    //this.item = this.navParams.data.item;
  }

  studInfo() {
    let modal = this.modalCtrl.create(StudentInfoPage);
    modal.present();
  }

}
