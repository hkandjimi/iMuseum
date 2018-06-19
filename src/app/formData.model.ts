export class FormData {
    contact: string = '';
    details: string = '';
    hours: string = '';
    images: Array<any>;
    lat: string = '';
    long: string = '';
    name: string = '';
    region: string = '';
    userName: string = '';
    password: string = '';
    email: string = '';
    type:string = '';
    title:string='';
    minor_id:number=0;
    major_id:number=0;
    summary:string ='';
    videos:Array<any>;
    audio:Array<any>;

    clear() {
        this.contact = '';
        this.details = '';
        this.hours = '';
        this.images = new Array();
        this.lat= '';
        this.long = '';
        this.name = '';
        this.region = '';
        this.userName = '';
        this.password = '';
        this.email = '';
        this.type = '';
        this.audio = new Array();
        this.videos = new Array();
    }
}

export class User {
    userName: string = '';
    password: string = '';
    email: string = '';
    type:string = '';
}

export class Museum {
    contact: string = '';
    details: string = '';
    hours: string = '';
    images: Array<any>;
    lat: string = '';
    long: string = '';
    name: string = '';
    region: string = '';
    type:string = '';
}
export class Artefact{
    title:string='';
    minor_id:number=0;
    major_id:number=0;
    summary:string ='';
    images:Array<any>;
    videos:Array<any>;
    audio:Array<any>;
    type:string = '';
}