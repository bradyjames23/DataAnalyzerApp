import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  @Output() cancelForgot = new EventEmitter();
  @Output() registerRedirect = new EventEmitter();
  @Output() loginRedirect = new EventEmitter();
  toggleModes: any = {};

  constructor() { }

  ngOnInit() {
  }

  cancel() {
    this.toggleModes.login = false;
    this.toggleModes.register = false;
    this.toggleModes.forgot = false;
    this.cancelForgot.emit(this.toggleModes);
  }

  register() {
    this.toggleModes.login = false;
    this.toggleModes.register = true;
    this.toggleModes.forgot = false;
    this.registerRedirect.emit(this.toggleModes);
  }

  login() {
    this.toggleModes.login = true;
    this.toggleModes.register = false;
    this.toggleModes.forgot = false;
    this.loginRedirect.emit(this.toggleModes);
  }

}
