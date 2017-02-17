import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',//herj
  templateUrl: 'app.component.html'//herklhj
  // styleUrls: ['app.component.css']//herh

})
export class MyApp {
  rootPage = HomePage;

  items: FirebaseListObservable<any[]>;
  private menu: Object[];

  constructor(platform: Platform, af: AngularFire) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      this.items = af.database.list('/menu');
      this.items.subscribe(items => {
          items.forEach(item => {
              console.log('Item:', item);
          });
        });
    });
  }

  public getMenu(): Object[] {
      return this.menu;
  }
}
