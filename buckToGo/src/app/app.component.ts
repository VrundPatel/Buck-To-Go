import { Component } from '@angular/core';
//import { AngularFire } from 'angularFire2';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';

//import { authDomain } from 'angularfire2'
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  templateUrl: 'app.html',

  selector: 'app-root',//herj
  //templateUrl: 'app.component.html',//herklhj
  //styleUrls: ['app.component.css']//herh


})
export class MyApp {
  rootPage = HomePage;

  items: FirebaseListObservable<any[]>;

  constructor(platform: Platform, af: AngularFire) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      this.items = af.database.list('/items');//herh
    });
  }
}
