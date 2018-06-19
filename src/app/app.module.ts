import { NgModule,NO_ERRORS_SCHEMA} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { RouterModule, Routes } from '@angular/router';
//Import Material design module
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { PouchDBService } from "./pouchdb.service";
import { MuseumsComponent } from './museums/museums.component';
import { BsModalModule } from 'ng2-bs3-modal';
import { NavbarComponent }    from './navbar/navbar.component';
import { ArtefactsComponent } from './artefacts/artefacts.component';
import { FormDataService }    from './formData.service';
import { PersonalComponent } from './personal/personal.component';
import { LoginComponent } from './login/login.component';

//Firebase authentication imports
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UploadFileService} from './services/upload-file.service'
import { UserUpdateComponent } from './user-update/user-update.component';

@NgModule({
  declarations: [
    AppComponent,
    MuseumsComponent,
    NavbarComponent,
    PersonalComponent,
    ArtefactsComponent,
    LoginComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    BsModalModule,
    HttpModule,
    MDBBootstrapModule.forRoot()
  ],
  
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [PouchDBService,FormBuilder,AuthService,AuthGuard,UploadFileService,
  {provide: FormDataService, useClass: FormDataService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
