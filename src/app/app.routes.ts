import { Routes } from '@angular/router';
import { SignUpComponent } from './pages/user/sign-up/sign-up.component';
import { LoginComponent } from './pages/user/login/login.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
];
