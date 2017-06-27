import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';LoginRestPasswordPage
import { LoginRestPasswordPage } from '../pages/login-rest-password/login-rest-password';
import { ForgotAnsPage } from '../pages/forgot-ans/forgot-ans';
import { ChangePassPage } from '../pages/change-pass/change-pass';
import { DashboardPage } from '../pages/dashboard/dashboard';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LoginRestPasswordPage,
    ForgotAnsPage,
    ChangePassPage,
    DashboardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LoginRestPasswordPage,
    ForgotAnsPage,
    ChangePassPage,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
