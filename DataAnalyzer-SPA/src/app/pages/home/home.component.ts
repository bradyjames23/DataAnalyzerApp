import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  loginMode = false;
  forgotMode = false;

  constructor() { }

  ngOnInit() {
  }

  registerToggle() {
    this.registerMode = true;
  }

  loginToggle() {
    this.loginMode = true;
  }

  forgotToggle() {
    this.forgotMode = true;
  }

  toggleMode(toggleModes: any) {
    this.loginMode = toggleModes.login;
    this.registerMode = toggleModes.register;
    this.forgotMode = toggleModes.forgot;
  }

}
