import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppareilFormPage } from './appareil-form';

@NgModule({
  declarations: [
    AppareilFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AppareilFormPage),
  ],
})
export class AppareilFormPageModule {}
