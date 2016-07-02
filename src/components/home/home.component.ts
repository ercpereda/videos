import { Component, OnInit } from '@angular/core';

import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'home',
  template: require('./home.component.html'),
  styles: [require('./home.component.css')],
  directives: [LoginFormComponent]
})
export class HomeComponent {
}
