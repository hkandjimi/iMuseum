import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';


@Component ({
    selector:     'mt-wizard-personal'
    ,templateUrl: './personal.component.html'
})

export class PersonalComponent implements OnInit {
    title = 'Please tell us about yourself.';
    form: any;
    
    constructor(private router: Router) {
    }

    ngOnInit() {
        //this.personal = this.formDataService.getPersonal();
        console.log('Personal feature loaded!');
    }

}
