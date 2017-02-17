import { Component } from '@angular/core';
//import { AngularFire, FirebaseListObservable } from 'angularFire2';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
//  providers: [AngularFire]
})
export class HomePage {

    //menu: FirebaseListObservable<any[]>;

    constructor(public navCtrl: NavController/*, af: AngularFire*/) {
        //this.menu = af.database.list('/menu');
  }
}
