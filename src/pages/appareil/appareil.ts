import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppareilPage');
  }


  onLoadAppareil(type) {
    this.navCtrl.push(SingleAppereilPage, { appareilName: type })
    // console.log(type);

  }

}
