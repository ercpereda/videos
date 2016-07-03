import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

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
    this.authService.login(this.username, this.password)
        .subscribe(
          (a: any)  => {
            console.log(a);
            this.router.navigate(['/dashboard']);
          },
          e => console.error(e)
        );
  }
}
