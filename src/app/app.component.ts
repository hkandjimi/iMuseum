import { Component, OnInit,AfterViewInit,ViewChild, NgZone, Input  } from '@angular/core';
import { PouchDBService } from "./pouchdb.service";
import { Router } from '@angular/router';
import { BsModalComponent,BsModalService, BsModalHideType } from '../../node_modules/ng2-bs3-modal';
import { FormDataService }    from './formData.service';
import { AuthGuard } from './services/auth-guard.service';
import 'jquery';
import 'bootstrap';
import { Museum } from './formData.model';
import { MuseumsComponent } from '.';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    @ViewChild('modal')
    @ViewChild('museumForm') museumForm;
    @Input() form;
    modal: BsModalComponent;
    link:string;
    selected: string;
    output: string;
    intercept = true;
    museum: Museum;
    validForm:boolean;
    loggedIn:AuthGuard;
   
    public people: Array<any>;
    //public form: any;
    public username:string;

    public constructor(private database: PouchDBService, private zone: NgZone,private router: Router,
        private modalservice: BsModalService,private formDataService: FormDataService,public authorizedUser:AuthGuard) {
        this.people = [];
        this.loggedIn = this.authorizedUser;
        
    }


    public ngOnInit() {
        this.form = this.formDataService.getFormData();
        this.validForm = this.formDataService.validSave;
        this.loggedIn.canActivate();
        this.database.sync("http://localhost:4984/imuseum");
        this.database.getChangeListener().subscribe(data => {
            for(let i = 0; i < data.change.docs.length; i++) {
                this.zone.run(() => {
                    this.people.push(data.change.docs[i]);
                });
            }
        });
        this.database.fetch().then(result => {
            this.people = [];
            for(let i = 0; i < result.rows.length; i++) {
                this.people.push(result.rows[i].doc);
            }
        }, error => {
            console.error(error);
        });
    }
    public insert() {
        //console.log(this.museumForm.name);
        let id = Date.now().valueOf();
        if(this.formDataService.getType() == 'museum'){
            console.log(this.formDataService.getMuseum().name);
            this.database.put("Museum_"+id, this.formDataService.getMuseum());
            this.form = this.formDataService.resetFormData();
        }else if(this.formDataService.getType() == 'user'){
            this.database.put("User_"+id, this.formDataService.getUser());
            this.form = this.formDataService.resetFormData();
        }else if(this.formDataService.getType() == 'artefact'){
            console.log(this.formDataService.getMuseum().name);
            this.database.put("Artefact_"+id, this.formDataService.getArtefact());
            this.form = this.formDataService.resetFormData();
        }
    }
    closed() {
        this.output = '(closed) ' + this.selected;
    }

    dismissed(type) {
        this.output = `(dismissed) ${BsModalHideType[type]}`;
    }

    opened() {
        this.output = '(opened)';
    }
    changeLink(activeLink:string){
        this.link = activeLink;
    }
    navigate() {
        this.router.navigateByUrl('/hello');
    }

    open() {
        this.modal.open();
    }
    close(){
        this.modal.close();
    }
    dismissAll() {
        this.modalservice.dismissAll();
    }

    interceptDismiss(e) {
        if (this.intercept && e.type === BsModalHideType.Dismiss) {
            e.event.preventDefault();
            this.output = '(intercepted) Dismiss';
        }
    }

    interceptOpen(e) {
        if (this.intercept) {
            e.preventDefault();
            this.output = '(intercepted) Open';
        }
    }


}
