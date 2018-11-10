import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { SingleAppereilPage } from './single-appereil/single-appereil';
import { AppareilService } from '../../services/appareils.service';
import { Appareil } from '../../models/appareil';
import { AppareilFormPage } from '../appareil-form/appareil-form';

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
  appareilList: Appareil[] = []


  constructor(
    private modal: ModalController,
    private menu: MenuController,
    private nav: NavController,
    private appareilService: AppareilService) {

  }


  ionViewWillEnter() {
    this.appareilList = this.appareilService.appareilList.slice()
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AppareilPage');
  }


  onLoadAppareil(index: number) {
    // this.navCtrl.push(SingleAppereilPage, { appareilName: appareil })
    // console.log(type);

    this.modal.create(SingleAppereilPage, { "index": index }).present();
  }


  onNewAppareil() {
    this.nav.push(AppareilFormPage)
  }


  ontoogleMenu() {
    this.menu.open()
  }

}
