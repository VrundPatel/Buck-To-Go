import { NgModule, ErrorHandler } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


// Firebase config
export const firebaseConfig = {
    apiKey: 'AIzaSyBwZy8APsCHetpOd4oqGXJjZsh1yJntNtc',
    databaseURL: 'https://buck-to-go.firebaseio.com/',
    storageBucket: 'buck-to-go.appspot.com',
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
