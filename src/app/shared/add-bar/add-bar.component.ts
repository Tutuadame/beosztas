import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AssistantService } from 'src/app/services/assistants/assistant.service';
import { AssignmentService } from 'src/app/services/assignments/assignment.service';
import { CouldworkService } from 'src/app/services/couldworks/couldwork.service';
import { Assignment, Assistant, CouldWork, CouldWorkWithoutID } from 'src/app/pages/Objects/interfaces';

@Component({
  selector: 'app-add-bar',
  templateUrl: './add-bar.component.html',
  styleUrls: ['./add-bar.component.css'],
})

export class AddBarComponent implements OnInit, OnDestroy {
  page: string = "";
  //Asszisztensek
  name = new FormControl('');
  //Rendelesek
  subscriptions: Array<Subscription> = [];

  asszisztens_id = new FormControl('');

  rendeles_id = new FormControl('');

  rendelesForm = new FormGroup({
    day: new FormControl(''),
    rname: new FormControl(''),
    begin: new FormControl(''),
    end: new FormControl(''),
    doctor: new FormControl('')
  })


  
  Assignments: Array<Assignment> = [];  
 
  loadingSubscription?: Subscription;

  constructor(private router: Router, private a_s: AssistantService, private assign_ser: AssignmentService, private c_s: CouldworkService){}
  
  
  assistants: Array<Assistant> = [];
  couldWork: Array<CouldWork> = [];
 

  ngOnInit(): void {
    let b_c = document.getElementById('b_container');
    const button = document.createElement("button");
    
    let assistants_keys: string[];
    let couldWork_keys: string[];
    let Assignments_keys: string[];

    this.subscriptions.concat(this.a_s.getAll().subscribe((data: Array<Assistant>) => {
      this.assistants = data;
      assistants_keys = Object.keys(this.assistants[0]);
    }));

    this.subscriptions.concat(this.c_s.getAll().subscribe((data: Array<CouldWork>) => {
      this.couldWork = data;
      couldWork_keys= Object.keys(this.couldWork[0]);
    }));

    this.subscriptions.concat(this.assign_ser.getAll().subscribe((data: Array<Assignment>) => {
      this.Assignments = data;
      
      if( data.length != 0 ){
        Assignments_keys = Object.keys(this.Assignments[0]);
      }
      
    }));
   
    button.textContent = "+";
    button.setAttribute('sight','');
    button.setAttribute('name',this.page);   

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) =>{
      let url = (evts.urlAfterRedirects as string).split('/');
      this.page = url[url.length - 1];
      if(this.page != 'home'){
        b_c?.appendChild(button);
      }
      if(this.page == 'home' && button.parentNode == b_c){
        b_c?.removeChild(button);
      }
    })
  }
  
  callAddAssistant(){
    this.a_s.create(this.name.value).then( ()=>{
      console.log('Asszisztens hozzadva!')
    }).catch(error=>{
      console.log('Hiba asszisztensnel:', error);
    })
    
  }

  callAddCouldWork(){    
    let new_couldwork: CouldWorkWithoutID = {
      'begin' : this.rendelesForm.value.begin,
      'end': this.rendelesForm.value.end,
      'day': this.rendelesForm.value.day,
      'rname': this.rendelesForm.value.rname,
      'doctor':this.rendelesForm.value.doctor
    }

    this.c_s.create(new_couldwork).then(()=>{
      console.log('Rendeles hozzadva!')      
    }).catch(error=>{
      console.log('Hiba rendelesnel:', error);
    });
  }

  callAddAssignment(){
    this.assign_ser.create(this.asszisztens_id.value, this.rendeles_id.value).then(()=>{
      console.log('Beosztas hozzadva!')      
    }).catch(error =>{
      console.log('Hiba beosztasnal:', error);
    });
  }

  ngOnDestroy(){
    this.loadingSubscription?.unsubscribe();
  }

  
}

