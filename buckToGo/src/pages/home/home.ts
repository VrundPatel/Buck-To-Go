import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularFire2';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, af: AngularFire) {
  }
}
