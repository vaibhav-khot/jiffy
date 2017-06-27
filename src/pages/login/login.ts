import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { LoginRestPasswordPage } from '../login-rest-password/login-rest-password';
import { DashboardPage } from '../dashboard/dashboard';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:any = {
    clientID: "",
    password:""
  }


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  forgetPass() {
    this.navCtrl.push(LoginRestPasswordPage);
  }
  signIn() {
    if(this.user.clientID == "0" && this.user.password == "0" )
      this.navCtrl.setRoot(DashboardPage)
    else {
      alert("Wrong Password or User Name")
    }
  }


}
