import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SubMenuPage } from '../pages/sub-menu-page/sub-menu-page';
import { OrderSummaryPage } from '../pages/order-summary/order-summary';
import { ItemOrderPage } from '../pages/item-order/item-order';
import { StudentInfoPage } from '../pages/student-info/student-info';
import { PaymentOptionPage } from '../pages/payment-option/payment-option';
import { QueuePage } from '../pages/queue/queue';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
    apiKey: 'AIzaSyBwZy8APsCHetpOd4oqGXJjZsh1yJntNtc',
    databaseURL: 'https://buck-to-go.firebaseio.com/',
    storageBucket: 'buck-to-go.appspot.com',
    authDomain: 'https://console.firebase.google.com/project/buck-to-go/overview'
}

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'df9c33a4'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SubMenuPage,
    OrderSummaryPage,
    ItemOrderPage,
    StudentInfoPage,
    PaymentOptionPage,
    QueuePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SubMenuPage,
    OrderSummaryPage,
    ItemOrderPage,
    StudentInfoPage,
    PaymentOptionPage,
    QueuePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
