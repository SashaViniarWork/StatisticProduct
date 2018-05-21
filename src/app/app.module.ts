import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {IndexComponent} from './component/index/index.component';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routing';
import {LocationStrategy} from '@angular/common';
import {HashLocationStrategy} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AddComponent } from './component/add/add.component';
import { EditComponent } from './component/edit/edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {MatListModule} from '@angular/material/list';
import { FIREBASE_CONFIG } from './firebase.credentials';
import {ProductsService} from "./services/products.service";
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AuthService} from "./services/auth.service";
import { LoginComponent } from './component/auth/login/login.component';
import { RegistrationComponent } from './component/auth/registration/registration.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AddConstUsersComponent } from './component/add-const-users/add-const-users.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddComponent,
    EditComponent,
    LoginComponent,
    RegistrationComponent,
    AddConstUsersComponent
  ],
  imports: [
    MatGridListModule,
    BrowserModule,
    MatToolbarModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    RouterModule.forRoot(AppRoutes),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, ProductsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
