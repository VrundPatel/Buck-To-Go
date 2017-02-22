import { Component } from '@angular/core';
import { ModalController, Platform, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-student-info',
  templateUrl: 'student-info.html'
})
export class StudentInfoPage {

  constructor(
    //public platform: Platform,
    //public navParams: NavParams,
    public viewCtrl: ViewController
  ) {}

  dismiss(){
    this.viewCtrl.dismiss();
  }

  requirmentInfo(){
    alert("Hallo");
    this.dismiss();
  }

}
