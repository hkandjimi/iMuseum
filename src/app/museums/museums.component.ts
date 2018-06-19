import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms'
import { FormDataService }    from '../formData.service';
import { Museum } from '../formData.model';

@Component({
  selector: 'museums',
  templateUrl: './museums.component.html',
  styleUrls: ['./museums.component.scss']
})

export class MuseumsComponent implements OnInit {
  museum: Museum;
  media:string;
  form: any;
  saved:boolean;

  constructor(private formDataService: FormDataService) { 
  }

  ngOnInit() {
    this.saved = false;
    this.formDataService.setType("museum");
    this.museum = this.formDataService.getMuseum();
    console.log('Museum feature loaded!');
  }
  save() {
    this.saved = true;
    this.formDataService.setMedia(this.media,"images");
    if (this.museum.name =="" ) {
      return true;
    }
    this.formDataService.setMuseum(this.museum);
    return true;
  }
}
