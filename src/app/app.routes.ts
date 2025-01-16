import { Routes } from '@angular/router';
import { SignUpComponent } from './pages/user/sign-up/sign-up.component';
import { LoginComponent } from './pages/user/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ElectricityGeneralComponent } from './pages/reports/electricity/electricity-general/electricity-general.component';


export const routes: Routes = [
  {
    path: 'home',
    component: FooterComponent,
  },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'electricity-general', component: ElectricityGeneralComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
