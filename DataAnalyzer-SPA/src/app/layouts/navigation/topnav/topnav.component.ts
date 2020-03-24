import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/authorization/auth.service';
import { AlertifyService } from 'src/app/_services/utilities/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  // model: any = {};

  constructor(public authService: AuthService,
              private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }

  // login() {
  //   this.authService.login(this.model).subscribe(next => {
  //     console.log('logged in succesfully');
  //   }, error => {
  //     console.log('failed to login');
  //   });
  // }

  loggedIn() {
    // const token = localStorage.getItem('token');
    // return !!token; // short hand for if - else statement, -- returns true or false
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

}
