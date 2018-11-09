import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SingleAppereilPage } from './single-appereil/single-appereil';

/**
 * Generated class for the AppareilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appareil',
  templateUrl: 'appareil.html',
})
export class AppareilPage {

  appareilList = [
    {
      name: 'MAchine a lever',
      description: [
        'volume: 6littre',
        'Temps: 20minutes',
        'Consommation: 15kw'
      ]
    },
    {
      name: 'tele',
      description: [
        'volume: 16littre',
        'Temps: 2minutes',
        'Consommation: 10kw'
      ]
    }
  ]
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modal: ModalController

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppareilPage');
  }


  onLoadAppareil(appareil: { name: string, descripiton: string[] }) {
    // this.navCtrl.push(SingleAppereilPage, { appareilName: appareil })
    // console.log(type);

    this.modal.create(SingleAppereilPage, { appareilName: appareil }).present();
  }

}
