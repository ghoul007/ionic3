import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, ModalController, MenuController, ToastController, LoadingController } from 'ionic-angular';
import { SingleAppereilPage } from './single-appereil/single-appereil';
import { AppareilService } from '../../services/appareils.service';
import { Appareil } from '../../models/appareil';
import { AppareilFormPage } from '../appareil-form/appareil-form';
import { Subscription } from 'rxjs/Subscription';

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
export class AppareilPage implements OnInit, OnDestroy {
  appareilList: Appareil[] = []
  appareilSubscription: Subscription;

  constructor(
    private modal: ModalController,
    private menu: MenuController,
    private toast: ToastController,
    private loading: LoadingController,
    private nav: NavController,
    private appareilService: AppareilService) {

  }


  ngOnInit(): void {
    this.appareilSubscription = this.appareilService.appareil$.subscribe((list: Appareil[]) => {
      this.appareilList = list;
    });
    this.appareilService.emitAppareil();
  }

  // ionViewWillEnter() {
  //   this.appareilList = this.appareilService.appareilList.slice()
  // }


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


  onSaveList() {
    let loader = this.loading.create({
      content: "sauvgarde en cour"
    });
    loader.present();
    this.appareilService.saveData().then(() => {
      loader.dismiss();
      this.toast.create({
        message: 'Donnée sauvgardee',
        duration: 3000,
        position: 'bottom'
      }).present();
    }).catch((error) => {
      loader.dismiss();
      this.toast.create({
        message: error,
        duration: 3000,
        position: 'bottom'
      }).present();
    })
  }

  onFetchList() {
    let loader = this.loading.create({
      content: "Recuperation en cour"
    });
    loader.present();
    this.appareilService.fetchData().then(() => {
      loader.dismiss();
      this.toast.create({
        message: 'Donnée recuperees',
        duration: 3000,
        position: 'bottom'
      }).present();
    }).catch((error) => {
      loader.dismiss();
      this.toast.create({
        message: error,
        duration: 3000,
        position: 'bottom'
      }).present();
    })
  }


  ontoogleMenu() {
    this.menu.open()
  }


  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }



}
