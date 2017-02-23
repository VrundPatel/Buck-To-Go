import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-queue',
  templateUrl: 'queue.html',
  styles: ['queue.scss']
})
export class QueuePage {

  queue;

  constructor( public navCtrl: NavController, public navParams: NavParams) {
      this.queue = this.navParams.data.queue;
      console.log(this.queue);
  }

}
