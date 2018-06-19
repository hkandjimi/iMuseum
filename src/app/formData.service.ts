import { PouchDBService } from "./pouchdb.service";
import { Injectable } from '@angular/core';

import { FormData, User, Museum ,Artefact} from './formData.model';

@Injectable()
export class FormDataService {
    private formData: FormData = new FormData();
    public validSave:boolean= false;

    getArtefact():Artefact{
        var artefact: Artefact = {
            title: this.formData.title,
            minor_id:this.formData.minor_id,
            major_id:this.formData.major_id,
            summary:this.formData.summary,
            images:this.formData.images,
            videos:this.formData.videos,
            audio:this.formData.audio,
            type:this.formData.type
        };
        return artefact; //returnartefact data
    }
    setArtefact(data: Artefact):void{
        //Update Artefact data
            this.formData.title = data.title;
            this.formData.minor_id = data.minor_id;
            this.formData.major_id =data.major_id;
            this.formData.summary = data.summary;
            this.validSave = true;
    }
    getUser(): User {
        // Return the user data
        var user: User = {
            userName: this.formData.userName,
            password: this.formData.password,
            email: this.formData.email,
            type:this.formData.type
        };
        return user;
    }

    setUser(data: User) {
        // Update User data
        this.formData.userName = data.userName;
        this.formData.password = data.password;
        this.formData.email = data.email;
        this.validSave = true;
    }

    getMuseum(): Museum {
        // Return the Museum data
        var museum: Museum = {
            contact: this.formData.contact,
            details: this.formData.details,
            hours: this.formData.hours,
            images: this.formData.images,
            lat: this.formData.lat,
            long: this.formData.long,
            name: this.formData.name,
            region: this.formData.region,
            type:this.formData.type
        };
        return museum;
    }
    setType(Type:string){
        this.formData.type = Type;
    }
    getType():string{
        return this.formData.type;
    }
    setMedia(media:string,mediaType:string){
        if(mediaType=="images"){
            this.formData.images = media.split(",");
        }else if(mediaType=="videos"){
            this.formData.videos = media.split(",");
        }else if(mediaType=="audio"){
            this.formData.audio = media.split(",");
        }
    }
    setMuseum(data: Museum) {
        
        this.formData.contact = data.contact;
        this.formData.details = data.details;
        this.formData.hours = data.hours;
        this.formData.lat = data.lat;
        this.formData.long = data.long;
        this.formData.name = data.name
        this.formData.region = data.region;
        this.validSave = true;
        // Validate Museum form
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        this.validSave = false;
        this.formData.clear();
        return this.formData;
    }
}