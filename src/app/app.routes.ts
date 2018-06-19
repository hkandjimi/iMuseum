import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MuseumsComponent } from './museums/museums.component';
import {PersonalComponent} from './personal/personal.component';
import { ArtefactsComponent } from './artefacts/artefacts.component';
import { LoginComponent } from './login/login.component';
import {UserUpdateComponent} from './user-update/user-update.component'

export const appRoutes: Routes = [
  { path: 'home', 
    component: AppComponent 
  },
  {
    path: 'museums',
    component: MuseumsComponent
    
  },
  {
    path: 'personal',
    component: PersonalComponent
  },
  {
    path: 'artefact',
    component: ArtefactsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: UserUpdateComponent
  }
];
@NgModule({
  imports : [ RouterModule.forRoot( appRoutes ,{ useHash: true}) ] ,
  exports : [ RouterModule ]
})
  export class routing{}