import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Import moment module
import { MomentModule } from 'angular2-moment';

// import services
import { DriverService } from '../services/driver-service';
import { NotificationService } from '../services/notification-service';
import { PlaceService } from '../services/place-service';
import { TripService } from '../services/trip-service';
import { SettingService } from "../services/setting-service";
import { DealService } from "../services/deal-service";
import { AuthService } from "../services/auth-service";
// end import services

// import pages
import { DriverPage } from '../pages/driver/driver';
import { FindingPage } from '../pages/finding/finding';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ModalRatingPage } from '../pages/modal-rating/modal-rating';
import { NotificationPage } from '../pages/notification/notification';
import { PaymentMethodPage } from '../pages/payment-method/payment-method';
import { PlacesPage } from '../pages/places/places';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { SupportPage } from '../pages/support/support';
import { TrackingPage } from '../pages/tracking/tracking';
import { MapPage } from "../pages/map/map";
import { TripsPage } from '../pages/trips/trips';
import { TripDetailPage } from '../pages/trip-detail/trip-detail';
import { UserPage } from '../pages/user/user';
import { CardSettingPage} from '../pages/card-setting/card-setting';
// end import pages

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBLp8awgJKxxFXdFv1lDHH5EDVDmMa3huI",
  authDomain: "fir-taxi-30f13.firebaseapp.com",
  databaseURL: "https://fir-taxi-30f13.firebaseio.com",
  projectId: "fir-taxi-30f13",
  storageBucket: "fir-taxi-30f13.appspot.com",
  messagingSenderId: "754076567028"
};

@NgModule({
  declarations: [
    MyApp,
    DriverPage,
    FindingPage,
    HomePage,
    LoginPage,
    ModalRatingPage,
    NotificationPage,
    PaymentMethodPage,
    PlacesPage,
    ProfilePage,
    RegisterPage,
    SupportPage,
    TrackingPage,
    MapPage,
    TripsPage,
    TripDetailPage,
    UserPage,
    CardSettingPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MomentModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DriverPage,
    FindingPage,
    HomePage,
    LoginPage,
    ModalRatingPage,
    NotificationPage,
    PaymentMethodPage,
    PlacesPage,
    ProfilePage,
    RegisterPage,
    SupportPage,
    TrackingPage,
    MapPage,
    TripsPage,
    TripDetailPage,
    UserPage,
    CardSettingPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    DriverService,
    NotificationService,
    PlaceService,
    TripService,
    SettingService,
    DealService,
    AuthService,
    /* import services */
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
