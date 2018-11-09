import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

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
  appareil: {
    name: string,
    description: string[]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private view: ViewController) {
  }

  ngOnInit() {
    this.appareil = this.navParams.get('appareilName')
  }

  dismissModal() {
    this.view.dismiss();
  }

}
