import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { OptionPage } from '../pages/option/option';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
  tabsPage: any = TabsPage
  optionPage: any = OptionPage

  @ViewChild('content') content: NavController

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    private menu: MenuController,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.menu.close();
    });
  }

  onNavigate(page: any) {
    this.content.setRoot(page);
    this.menu.close();
  }
}

