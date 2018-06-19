export class UserUpdate {
 
    $key: string;
    username:string;
    filename: string;
    email:string;
    password:string;
    url: string;
    file: File;
   
    constructor(file: File) {
      this.file = file;
    }
  }