import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms'
import { FormDataService }    from '../formData.service';
import { Artefact } from '../formData.model';

@Component({
  selector: 'artefacts',
  templateUrl: './artefacts.component.html',
  styleUrls: ['./artefacts.component.scss']
})

export class ArtefactsComponent implements OnInit {
  artefact: Artefact;
  form: any;
  saved:boolean;
  images:string;
  videos:string;
  audio:string;
  constructor(private formDataService: FormDataService) { 
  }

  ngOnInit() {
    this.saved = false;
    this.formDataService.setType("artefact");
    this.artefact = this.formDataService.getArtefact();
    console.log('Artefact feature loaded!');
  }
  save() {
    this.saved = true;
    this.formDataService.setMedia(this.images,"images");
    this.formDataService.setMedia(this.videos,"videos");
    this.formDataService.setMedia(this.audio,"audio");
    if (this.artefact.title == "" ) {
      return false;
    }
    this.formDataService.setArtefact(this.artefact);
    return true;
  }
}
