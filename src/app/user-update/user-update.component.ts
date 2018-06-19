import {Component, OnInit} from '@angular/core';
 
import {UploadFileService} from '../services/upload-file.service';
import {UserUpdate} from '../models/userupdate';
import { BsModalService } from '../../../node_modules/ng2-bs3-modal';
 
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  selectedFiles: FileList
  newUser: UserUpdate ;
  user = {
    email: '',
    password: '',
    username:'',
  };
  progress: {percentage: number} = {percentage: 0}
 
  constructor(private uploadService: UploadFileService,private modalservice: BsModalService) {}
 
  ngOnInit() {
    
  }
 
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
 
  upload() {
    const file = this.selectedFiles.item(0)
    this.newUser = new UserUpdate(file);
    this.newUser.email = this.user.email;
    this.newUser.username = this.user.username;
    this.newUser.password = this.user.password;
    this.uploadService.pushFileToStorage(this.newUser, this.progress);
    this.modalservice.dismissAll();
  }

}
