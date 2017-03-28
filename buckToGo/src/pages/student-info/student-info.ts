import { Component } from '@angular/core';
import { ModalController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-student-info',
  templateUrl: 'student-info.html'
})
export class StudentInfoPage {
    currentOrder;
    constructor(public modalCtrl: ModalController, public navParams: NavParams, public viewCtrl: ViewController) {
        this.currentOrder = navParams.data.currentOrder;
    }

  dismiss(){ this.viewCtrl.dismiss(); }

  requirementInfo(){ this.dismiss(); }
}
