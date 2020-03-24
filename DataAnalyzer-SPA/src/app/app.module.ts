import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { TopnavComponent } from './layouts/navigation/topnav/topnav.component';
import { AuthService } from './_services/authorization/auth.service';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ToggleService } from './_services/layout/toggle.service';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { ErrorInceptorProvider } from './_services/authorization/error.interceptor';
import { AlertifyService } from './_services/utilities/alertify.service';
import { MessagesComponent } from './pages/dashboard/messages/messages.component';
import { appRoutes } from './routes';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      TopnavComponent,
      HomeComponent,
      RegisterComponent,
      LoginComponent,
      ForgotpasswordComponent,
      MessagesComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService,
      ToggleService,
      ErrorInceptorProvider,
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
