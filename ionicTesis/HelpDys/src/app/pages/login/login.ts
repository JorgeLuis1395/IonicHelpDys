import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;
  perfil: string;

  constructor(
    public menu: MenuController,
    public userData: UserData,
    public router: Router
  ) { this.perfil = 'p';}

  /*onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/app/tabs/(agenda:agenda)');
    }
  }*/
 select(){
   console.log(this.perfil)
 }
  onLogin() {
      if(this.perfil == 'e'){
          this.router.navigateByUrl('est/tabs/(inicio:inicio)');
      }
      if(this.perfil == 'p'){
        this.router.navigateByUrl('app/tabs/(about:about)');
      }
  }
  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
