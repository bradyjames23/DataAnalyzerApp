import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      TopnavComponent,
      HomeComponent,
      RegisterComponent,
      LoginComponent,
      ForgotpasswordComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      AuthService,
      ToggleService,
      ErrorInceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
