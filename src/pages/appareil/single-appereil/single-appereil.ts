import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Appareil } from '../../../models/appareil';
import { AppareilService } from '../../../services/appareils.service';

/**
 * Generated class for the SingleAppereilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-single-appereil',
  templateUrl: 'single-appereil.html',
})
export class SingleAppereilPage implements OnInit {
  appareil: Appareil
  index: any;

  constructor(
    public appareilSrevice: AppareilService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index')
    this.appareil = this.appareilSrevice.appareilList[this.index]
  }

  dismissModal() {
    this.view.dismiss();
  }


  ontoggleAppareil() {
    this.appareil.isOn = !this.appareil.isOn;
  }


}
