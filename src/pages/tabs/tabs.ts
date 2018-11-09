import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AppareilPage } from '../appareil/appareil';
import { SettingPage } from '../setting/setting';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AppareilPage
  tab2Root = SettingPage


  constructor(public navCtrl: NavController) {}

}
