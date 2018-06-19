import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
 
import {UserUpdate} from '../models/userupdate';
 
@Injectable()
export class UploadFileService {
 
  constructor(private db: AngularFireDatabase) {}
 
  private basePath = '/uploads/profiles';
 
  pushFileToStorage(fileUpload: UserUpdate, progress: {percentage: number}) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
 
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100)
      },
      (error) => {
        // fail
        console.log(error)
      },
      () => {
        // success
        //fileUpload.email = fileUpload.email
        fileUpload.url = uploadTask.snapshot.downloadURL
        fileUpload.filename = fileUpload.file.name
        this.saveFileData(fileUpload)
      }
    );
  }
 
  private saveFileData(fileUpload: UserUpdate) {
    this.db.list(`${this.basePath}/`).push(fileUpload);
  }
}