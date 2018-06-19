import { Component,ViewEncapsulation } from '@angular/core';
import { AuthGuard } from '../services/auth-guard.service';
@Component ({
    selector: 'msw-navbar'
    ,templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
    loggedIn:AuthGuard;
    public constructor(public authorizedUser:AuthGuard){
        this.loggedIn = this.authorizedUser;
    }
}