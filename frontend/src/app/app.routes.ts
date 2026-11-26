import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Browse } from './pages/browse/browse';
import { Login } from './pages/login/login';
import { RegisterComponent } from './register.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'browse', component: Browse },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: Login },
];