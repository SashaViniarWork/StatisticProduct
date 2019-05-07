import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {IndexComponent} from './component/index/index.component';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routing';
import {LocationStrategy} from '@angular/common';
import {HashLocationStrategy} from '@angular/common';
import {AddComponent} from './component/add/add.component';
import {EditComponent} from './component/edit/edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {FIREBASE_CONFIG} from './firebase.credentials';
import {ProductsService} from './services/products.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './services/auth.service';
import {LoginComponent} from './component/auth/login/login.component';
import {RegistrationComponent} from './component/auth/registration/registration.component';
import {ConstValService} from './services/const-val.service';
import {ChangeTotalComponent} from './component/change-total/change-total.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import { StatisticComponent } from './component/statistic/statistic.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddComponent,
    EditComponent,
    LoginComponent,
    RegistrationComponent,
    ChangeTotalComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatGridListModule,
    MatSelectModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, ProductsService, AuthService, ConstValService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
