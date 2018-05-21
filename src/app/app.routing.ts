import {IndexComponent} from './component/index/index.component';
import {AddComponent} from './component/add/add.component';
import {EditComponent} from './component/edit/edit.component';
import { LoginComponent} from './component/auth/login/login.component';
import {RegistrationComponent} from './component/auth/registration/registration.component';
import {AddConstUsersComponent} from './component/add-const-users/add-const-users.component';
import {ChangeTotalComponent} from './component/change-total/change-total.component';
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
  {path: 'const_value', component: AddConstUsersComponent},
  {path: 'change_total/:id', component: ChangeTotalComponent},
];
