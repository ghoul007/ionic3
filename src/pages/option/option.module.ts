import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OptionPage } from './option';

@NgModule({
  declarations: [
    OptionPage,
  ],
  imports: [
    IonicPageModule.forChild(OptionPage),
  ],
})
export class OptionPageModule {}
