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


import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { AngularFireModule }  from 'angularfire2/';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { fromEventPattern } from 'rxjs';

const config = {
  apiKey: "AIzaSyCjg_BSbq9Yy3JqElUTpl-zfo2PhnzZF7I",
  authDomain: "momsinla-1533369939594.firebaseapp.com",
  databaseURL: "https://momsinla-1533369939594.firebaseio.com",
  projectId: "momsinla-1533369939594",
  storageBucket: "momsinla-1533369939594.appspot.com",
  messagingSenderId: "480270997253"
};
// import { Calendar } from '@ionic-native/calendar';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UserPage
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages: true}),
    IonicStorageModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UserPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    FirebaseServiceProvider,
    Geolocation
  ]
})
export class AppModule {}
