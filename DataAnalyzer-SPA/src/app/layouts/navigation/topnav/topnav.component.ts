import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/authorization/auth.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  // model: any = {};

  constructor(private authService: AuthService) { }

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
    const token = localStorage.getItem('token');
    return !!token; // short hand for if - else statement, -- returns true or false
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
