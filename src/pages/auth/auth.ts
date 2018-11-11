import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import * as firebase from 'firebase'
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage implements OnInit {

  mode: string;
  authForm: FormGroup;
  errorMessage: any;

  constructor(
    public navCtrl: NavController,
    private authService: AuthService,
    private menu: MenuController,
    private formbuilder: FormBuilder,
    public navParams: NavParams) {
  }


  ngOnInit() {
    this.mode = this.navParams.get('mode');
    this.initForm()
  }


  initForm() {
    this.authForm = this.formbuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    })
  }



  onSubmitForm() {
    const email = this.authForm.get('email').value
    const password = this.authForm.get('password').value
    if (this.mode === 'new') {

      this.authService.signUp(email, password).then(
        () => {
          this.navCtrl.setRoot(TabsPage);
        },
        (error)=>{
          this.errorMessage  =  error;
        }
      )
    } else if (this.mode == "connect") {
      this.authService.signIn(email, password).then(
        () => {
          this.navCtrl.setRoot(TabsPage);
        },
        (error)=>{
          this.errorMessage  =  error;
        }
      )
    }
    // this.navCtrl.p
  }

  ontoogleMenu() {
    this.menu.open()
  }

}
