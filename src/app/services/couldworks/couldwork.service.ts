import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CouldWork, CouldWorkWithoutID } from 'src/app/pages/Objects/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CouldworkService {

  constructor(private afs: AngularFirestore) { }

  collectionName = 'assistants'

  create(couldwork_sample: CouldWorkWithoutID){
    console.log(couldwork_sample);
    let number: number = Math.round(Math.random() * (9999 - 1000) + 1000);
    let createdId = 'C'+number.toString();

    let couldwork:CouldWork = {
      'begin': couldwork_sample.begin,
      'end': couldwork_sample.end,
      'day': couldwork_sample.day,
      'rname': couldwork_sample.rname,
      'doctor': couldwork_sample.doctor,
      'id': createdId
    };

    return this.afs.collection<CouldWork>('couldworks').doc(createdId).set(couldwork);

  }

  update(){
    
  }

  getAll(){
    return this.afs.collection<CouldWork>('couldworks').valueChanges();
  }

  delete(couldWork_id: string){
    return this.afs.collection<CouldWork>('couldworks').doc(couldWork_id).delete();
  }
}
