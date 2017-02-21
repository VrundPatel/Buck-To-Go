import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularFire2';

/*
  Generated class for the Queue page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-queue',
  templateUrl: 'queue.html',
  styles: ['queue.scss']
})
export class QueuePage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public af: AngularFire) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueuePage');
  }

}
