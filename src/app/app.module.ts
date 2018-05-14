import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {IndexComponent} from './index/index.component';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routing';
import {LocationStrategy} from '@angular/common';
import {HashLocationStrategy} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {MatListModule} from '@angular/material/list';
import { FIREBASE_CONFIG } from './firebase.credentials';
import {ProductsService} from "./products.service";
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
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
    AngularFireDatabaseModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
