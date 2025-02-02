import { Routes } from '@angular/router';
import { SignUpComponent } from './pages/user/sign-up/sign-up.component';
import { LoginComponent } from './pages/user/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ElectricityGeneralComponent } from './pages/reports/electricity/electricity-general/electricity-general.component';
import { YourResolverService } from './services/your-resolver.service';


export const routes: Routes = [
  {
    path: 'home',
    component: FooterComponent,
  },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'electricityGeneral/:InitDate/:FinalDate',
    component: ElectricityGeneralComponent,
    data: { prerender: true },
    resolve: {
      params: YourResolverService // Asegúrate de tener un resolver configurado
    }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
