import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter, subscribeOn, Subscription } from 'rxjs';
import { CouldWorkObject, AssingmentsObject, AssistantObject } from '../../pages/Objects/data';
import { AssistantService } from 'src/app/services/assistants/assistant.service';

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

  asszisztens_id = new FormControl('');

  rendeles_id = new FormControl('');

  rendelesForm = new FormGroup({
    day: new FormControl(''),
    rname: new FormControl(''),
    begin: new FormControl(''),
    end: new FormControl(''),
    doctor: new FormControl('')
  })

  assistants: Array<any> = AssistantObject;
  assingments: Array<any> = AssingmentsObject;
  couldWork: Array<any> = CouldWorkObject;

  assistants_keys: Array<any> = Object.keys(this.assistants[0]);
  assingments_keys: Array<any> = Object.keys(this.assingments[0]);
  couldWork_keys: Array<any> = Object.keys(this.couldWork[0]);
  loadingSubscription?: Subscription;

  constructor(private router: Router, private a_s: AssistantService){}

  ngOnInit(): void {
    let b_c = document.getElementById('b_container');
    const button = document.createElement("button");
   
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
    /*//console.log(this.name.value);
    this.a_s.create(this.name.value).then(()=>{
      console.log('Asszisztens hozzadva!')
    }).catch(error=>{
      console.log('Hiba:', error);
    })*/
  }

  callAddCouldWork(){
  ///
  }

  callAddAssingment(){
    
  }

  ngOnDestroy(){
    this.loadingSubscription?.unsubscribe();
  }

  
}

