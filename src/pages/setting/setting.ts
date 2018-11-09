import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Button, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alert: AlertController,
    private menu: MenuController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  oToggleLights() {
    this.alert.create({
      title: 'etes vous de vouloir continuer',
      subTitle: ' cette action allumera les lumiere ',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'confirmer',
          handler: () => console.log('confirmé')
        }
      ]
    }).present()
  }
  ontoogleMenu() {
    this.menu.open()
  }


}
