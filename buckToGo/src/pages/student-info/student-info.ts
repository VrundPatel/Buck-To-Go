import { Component } from '@angular/core';
import { ModalController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-student-info',
  templateUrl: 'student-info.html'
})
export class StudentInfoPage {
    currentOrder;
    public requiredStudentInfo: boolean;
    constructor(public modalCtrl: ModalController, public navParams: NavParams, public viewCtrl: ViewController) {
        this.currentOrder = navParams.data.currentOrder;
    }

  // dismiss(){ this.viewCtrl.dismiss(); }

  requirementInfo() {
    this.requiredStudentInfo = this.checkObject(this.currentOrder.customer);
    console.log('required student-info', this.requiredStudentInfo);
    this.viewCtrl.dismiss({
      requiredStudentInfo: this.requiredStudentInfo
    });
  }

  private checkObject(obj: Object): boolean {
    for(var o in obj) {
      console.log('o', o);
      if(!obj[o]) {
        return false;
      }
      return true;
    }
  }
}
