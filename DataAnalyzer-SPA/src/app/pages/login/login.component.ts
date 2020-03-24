import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/_services/authorization/auth.service';
import { AlertifyService } from 'src/app/_services/utilities/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() cancelLogin = new EventEmitter();
  @Output() registerRedirect = new EventEmitter();
  @Output() forgotRedirect = new EventEmitter();
  model: any = {};
  toggleModes: any = {};

  constructor(private authService: AuthService,
              private alertify: AlertifyService,
              private router: Router) {
   }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in succesfully');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/messages']);
    });
  }

  cancel() {
    this.toggleModes.login = false;
    this.toggleModes.register = false;
    this.toggleModes.forgot = false;
    this.cancelLogin.emit(this.toggleModes);
  }

  register() {
    this.toggleModes.login = false;
    this.toggleModes.register = true;
    this.toggleModes.forgot = false;
    this.registerRedirect.emit(this.toggleModes);
  }

  forgot() {
    this.toggleModes.login = false;
    this.toggleModes.register = false;
    this.toggleModes.forgot = true;
    this.forgotRedirect.emit(this.toggleModes);
  }

  // logout() {
  //   localStorage.removeItem('token');
  //   console.log('logged out');
  // }

}
