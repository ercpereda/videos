import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

let md5 = require('md5');

@Component({
  selector: 'login-form',
  template: require('./login-form.component.html'),
  styles: [require('./login-form.component.css')]
})
export class LoginFormComponent {
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login() {
    this.authService.login(this.username, md5(this.password))
        .subscribe(
          (a: any)  => {
            console.log(a);
            this.router.navigate(['/dashboard']);
          },
          e => console.error(e)
        );
  }
}
