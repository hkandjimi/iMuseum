import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  public username:string;
  constructor(private router: Router,
              private authService: AuthService) { }

  canActivate() {
    if  ( this.authService.isLoggedIn() ) {
      this.username = this.authService.loggedUser();
      //console.log("In guard"+this.username)
      return true;

    }

    //this.router.navigate(['/']);
    return false;
  }
  signOut(){
    this.authService.logout();
  }

}