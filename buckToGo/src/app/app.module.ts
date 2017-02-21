import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SubMenuPage } from '../pages/sub-menu-page/sub-menu-page';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
    apiKey: 'AIzaSyBwZy8APsCHetpOd4oqGXJjZsh1yJntNtc',
    databaseURL: 'https://buck-to-go.firebaseio.com/',
    storageBucket: 'buck-to-go.appspot.com',
    authDomain: 'https://console.firebase.google.com/project/buck-to-go/overview'
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SubMenuPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SubMenuPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
