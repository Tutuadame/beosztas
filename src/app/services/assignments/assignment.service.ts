import { Injectable } from '@angular/core';
import { Assignment } from '../../pages/Objects/interfaces';
import { CouldWork } from '../../pages/Objects/interfaces';
import { Assistant } from '../../pages/Objects/interfaces';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AssistantService } from '../assistants/assistant.service';
import { CouldworkService } from '../couldworks/couldwork.service';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AssignmentService {


  assistants: Array<Assistant> = [];
  couldworks: Array<CouldWork> = [];
  assistant: any;
  couldwork: any;

  constructor(private afs: AngularFirestore, private a_s: AssistantService, private c_s: CouldworkService) {
   
    this.subscriptions.concat(this.a_s.getAll().subscribe((data: Array<Assistant>) => {
      this.assistants = data;      
    }));

    this.subscriptions.concat(this.c_s.getAll().subscribe((data: Array<CouldWork>) => {
      this.couldworks = data;      
    }));
  }


  search( assistant_id: string, couldwork_id:string){
    for(let i=0; i<this.assistants.length; i++){
      if(assistant_id === this.assistants[i].id){
        this.assistant = this.assistants[i];
      }
    }
    for(let i=0; i<this.couldworks.length; i++){
      if(couldwork_id === this.couldworks[i].id){
        this.couldwork = this.couldworks[i];
      }
    }
  }

  collectionName = 'Assignments';
  subscriptions: Array<Subscription> = [];

  create(assistant_id: string, couldwork_id: string){
    let number: number = Math.round(Math.random() * (9999 - 1000) + 1000);
    let createdId = 'B'+number.toString();
    this.search(assistant_id, couldwork_id);
   
   let assignment: Assignment = {
      'day' : this.couldwork.day,
      'rname' : this.couldwork.rname,
      'begin' : this.couldwork.begin,
      'end' : this.couldwork.end,
      'assistant' : this.assistant.name,
      'doctor' : this.couldwork.doctor,
      'id' : createdId
    };

    return this.afs.collection<Assignment>(this.collectionName).doc(createdId).set(assignment);
  }


  async delete(assignment_id: string){
    console.log(assignment_id);
    return await this.afs.collection<Assignment>(this.collectionName).doc(assignment_id).delete();
  }

  update(assistant_id: string, couldwork_id: string, assignment_id: string){

    if(assistant_id != '' && couldwork_id != ''){
      this.search(assistant_id,couldwork_id);
      let assignment: Assignment = {
          'day' : this.couldwork.day,
          'rname' : this.couldwork.rname,
          'begin' : this.couldwork.begin,
          'end' : this.couldwork.end,
          'assistant' : this.assistant.name,
          'doctor' : this.couldwork.doctor,
          'id' : assignment_id  
      };
      console.log("Valtoztatva!");
      return this.afs.collection<Assignment>(this.collectionName).doc(assignment_id).set(assignment);
    }
      return null;
  }

  getAll(){
    return this.afs.collection<Assignment>(this.collectionName).valueChanges();    
  }
  ChangeAll(assignments: Array<Assignment>){    
    /*this.getAll().subscribe((data)=>{
      data.forEach(item =>{
        if(!assignments.includes(item)){
          this.delete(item.id);
        }
      })
    });*/
    

  }
}

