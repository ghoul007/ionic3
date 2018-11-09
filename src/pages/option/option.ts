import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the OptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-option',
  templateUrl: 'option.html',
})
export class OptionPage {

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
    private menu:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionPage');
  }


  ontoogleMenu(){
    this.menu.open()
  }

}
