import { Component } from '@angular/core';

import { NavController, AlertController, ActionSheetController } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  menu: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, af: AngularFire) {
      this.menu = af.database.list('/menu');
  }
}
