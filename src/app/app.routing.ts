import {IndexComponent} from './index/index.component';
import {AddComponent} from "./add/add.component";
import {EditComponent} from "./edit/edit.component";

export const AppRoutes: any = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'home', component: IndexComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit/:id', component: EditComponent},
];
