import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AppareilPage } from '../pages/appareil/appareil';
import { SingleAppereilPage } from '../pages/appareil/single-appereil/single-appereil';
import { SettingPage } from '../pages/setting/setting';
import { TabsPage } from '../pages/tabs/tabs';
import { AppareilService } from '../services/appareils.service';
import { OptionPage } from '../pages/option/option';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AppareilPage,
    SingleAppereilPage,
    SettingPage,
    TabsPage,
    OptionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AppareilPage,
    SingleAppereilPage,
    SettingPage,
    TabsPage,
    OptionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppareilService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
