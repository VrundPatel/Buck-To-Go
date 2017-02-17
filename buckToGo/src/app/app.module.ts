import { NgModule, ErrorHandler } from '@angular/core';
//import { AngularFireModule } from 'angularfire2';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { BrowserModule } from '@angular/platform-browser';
//import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';





// Firebase config
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

  //  AppComponent//herer

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,//herjer
    AngularFireModule.initializeApp(firebaseConfig)//herh
  //  AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
