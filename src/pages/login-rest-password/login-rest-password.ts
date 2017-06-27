import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ForgotAnsPage } from '../forgot-ans/forgot-ans';

/**
 * Generated class for the LoginRestPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-rest-password',
  templateUrl: 'login-rest-password.html',
})
export class LoginRestPasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginRestPasswordPage');
  }
  resetPass() {
    this.navCtrl.push(ForgotAnsPage);
  }
}
