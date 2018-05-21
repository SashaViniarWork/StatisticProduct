import {IndexComponent} from './component/index/index.component';
import {AddComponent} from './component/add/add.component';
import {EditComponent} from './component/edit/edit.component';
import { LoginComponent} from './component/auth/login/login.component';
import {RegistrationComponent} from './component/auth/registration/registration.component';
export const AppRoutes: any = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {path: 'home', component: IndexComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
];
