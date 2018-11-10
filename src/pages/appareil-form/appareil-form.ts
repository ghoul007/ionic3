import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AppareilService } from '../../services/appareils.service';
import { Appareil } from '../../models/appareil';

/**
 * Generated class for the AppareilFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appareil-form',
  templateUrl: 'appareil-form.html',
})
export class AppareilFormPage implements OnInit {

  appareilForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private appareilService: AppareilService,
    public navParams: NavParams) {
  }

  ngOnInit() {
    this.initForm();
  }


  initForm() {

    this.appareilForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: this.formBuilder.array([])
    })
  }


  getDescriptionArray() {
    return this.appareilForm.get('description') as FormArray;
  }

  onAddDescription() {
    let newControl = this.formBuilder.control('');
    this.getDescriptionArray().controls.push(newControl);
  }


  onRemoveDescription(index: number) {
    this.getDescriptionArray().removeAt(index)

  }


  onSumbitForm() {
    let newAppaareil = new Appareil(this.appareilForm.get('name').value);

    for (let control of this.getDescriptionArray().controls){
   newAppaareil.description.push(control.value);
    }

    this.appareilService.addApareil(newAppaareil);
    this.navCtrl.pop()
  }


}
