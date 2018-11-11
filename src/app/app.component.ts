import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';
// import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { OptionPage } from '../pages/option/option';
import { AuthPage } from '../pages/auth/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
  tabsPage: any = TabsPage
  optionPage: any = OptionPage
  authPage: any = AuthPage

  @ViewChild('content') content: NavController
  isAuth: boolean;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    private menu: MenuController,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {

      //firebase configuration
      let config = {
        apiKey: "AIzaSyCYfMiF9TSQF5D4NevsrpRxsYP3i-NtkrA",
        authDomain: "ionictuto-c2b61.firebaseapp.com",
        databaseURL: "https://ionictuto-c2b61.firebaseio.com",
        projectId: "ionictuto-c2b61",
        storageBucket: "",
        messagingSenderId: "402105718502"
      };
      firebase.initializeApp(config);

      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          } else {
            this.isAuth = false;
            this.content.setRoot(AuthPage, { mode: 'connect' })
          }
        }
      )

      statusBar.styleDefault();
      splashScreen.hide();
      this.menu.close();
    });
  }


  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menu.close();
  }


  onDisconnect() {
    firebase.auth().signOut();
    this.menu.close();
  }
}

