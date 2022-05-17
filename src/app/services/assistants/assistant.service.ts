import { Injectable } from '@angular/core';
import { Assistant } from '../../pages/Objects/interfaces';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AssistantService {

  constructor(private afs: AngularFirestore) { }

  collectionName = 'assistants';

  create(name: string){
    let number: number = Math.round(Math.random() * (9999 - 1000) + 1000);
    let createdId = 'A'+number.toString();

    let assistant:Assistant = {
      'hours': '0',
      'id': createdId,
      'name': name
    }

    return this.afs.collection<Assistant>(this.collectionName).doc(createdId).set(assistant);

  }

  update(){
    
  }

  getAll(){
    return this.afs.collection<Assistant>(this.collectionName).valueChanges();
  }

  delete(){
    
  }

}
