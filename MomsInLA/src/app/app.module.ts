import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UserPage } from '../pages/user/user';
// import { ProfilePage } from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { GooglePlus } from '@ionic-native/google-plus';


import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { ToastProvider } from '../providers/toast/toast';

import { AngularFireModule }  from 'angularfire2/';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { ActivityFilterComponent } from '../components/activity-filter/activity-filter';
import firebase from 'firebase';
import { TimeFormatProvider } from '../providers/time-format/time-format';



const config = {
  apiKey: "AIzaSyCMT0_8w3orZ7BEMi-7_QOpK8w6keTzXy0",
  authDomain: "momsinla-de26b.firebaseapp.com",
  databaseURL: "https://momsinla-de26b.firebaseio.com",
  projectId: "momsinla-de26b",
  storageBucket: "momsinla-de26b.appspot.com",
  messagingSenderId: "240243369411"
};

firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UserPage,
    ActivityFilterComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages: true}),
    IonicStorageModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UserPage,
    ActivityFilterComponent
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    FirebaseServiceProvider,
    Geolocation,
    InAppBrowser,
    NativeGeocoder,
    GooglePlus,
    ToastProvider,
    TimeFormatProvider
  ]
})
export class AppModule {}
