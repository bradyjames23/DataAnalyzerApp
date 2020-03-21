import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/_services/authorization/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  @Output() loginRedirect = new EventEmitter();
  model: any = {};
  toggleModes: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('Registration succesful');
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    this.toggleModes.login = false;
    this.toggleModes.register = false;
    this.toggleModes.forgot = false;
    this.cancelRegister.emit(this.toggleModes);
  }

  login() {
    this.toggleModes.login = true;
    this.toggleModes.register = false;
    this.toggleModes.forgot = false;
    this.loginRedirect.emit(this.toggleModes);
  }

}
