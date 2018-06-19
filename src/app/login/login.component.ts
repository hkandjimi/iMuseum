import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BsModalComponent,BsModalService, BsModalHideType } from '../../../node_modules/ng2-bs3-modal';
import $ from 'jquery';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  $: any;
  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router,private modalservice: BsModalService) {
  }


    signInWithEmail() {

      this.authService.signInRegular(this.user.email, this.user.password)
        .then((res) => {
          console.log(res);
          //this.router.navigate(['#about']);
          this.modalservice.dismissAll();
        })
        .catch((err) => console.log('error: ' + err));
    }



  ngOnInit() {
  }

}