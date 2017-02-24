import { Component } from '@angular/core';
import { ModalController, ViewController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-student-info',
  templateUrl: 'student-info.html'
})
export class StudentInfoPage {
pay;
  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {this.pay = this.navParams.data.pay;}


  dismiss(){
    this.viewCtrl.dismiss();
  }

  requirmentInfo(){

    this.dismiss();
  }

}
