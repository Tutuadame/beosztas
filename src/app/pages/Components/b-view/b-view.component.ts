import { Component, OnInit } from '@angular/core';
import { AssignmentService } from 'src/app/services/assignments/assignment.service';
import { Assignment } from '../../Objects/interfaces';
import { Observable, Subscription, Subject, startWith, switchMap } from 'rxjs';


@Component({
  selector: 'app-b-view',
  templateUrl: './b-view.component.html',
  styleUrls: ['./b-view.component.css']
})
export class BViewComponent implements OnInit {

  meret: number = 0;

  
  constructor(private assign_ser: AssignmentService) {    
  }

  subscriptions: Array<Subscription> = [];

  h_Assignments: Array<Assignment> = []; 
  k_Assignments: Array<Assignment> = []; 
  sze_Assignments: Array<Assignment> = [];
  cs_Assignments: Array<Assignment> = []; 
  p_Assignments: Array<Assignment> = []; 
  sz_Assignments: Array<Assignment> = []; 
  v_Assignments: Array<Assignment> = []; 

  separate(Object: Array<Assignment>){
    console.log("Meghivtak");
    let i=0;
    while(i !== Object.length){
      let element = Object[i];
      
      switch(element.day){
        case 'Hétfő': { 
          if(!this.check(this.h_Assignments, element)){
            this.h_Assignments.push(element);
          }
          break; 
       } 
        case 'Kedd': { 
          if(!this.check(this.k_Assignments, element)){
            this.k_Assignments.push(element);
          }        
          break; 
       }        
        case 'Szerda': {           
          if(!this.check(this.sze_Assignments, element)){
            this.sze_Assignments.push(element);
          }                  
          break; 
       } 
      
        case 'Csütörtök': { 
          if(!this.check(this.cs_Assignments, element)){
            this.cs_Assignments.push(element);
          }                            
          break; 
       } 
       
        case 'Péntek': {           
          if(!this.check(this.p_Assignments, element)){
            this.p_Assignments.push(element);
          }                                      
          break; 
       } 

        case 'Szombat': { 
          if(!this.check(this.sz_Assignments, element)){
            this.sz_Assignments.push(element);
          }                                                
          break; 
       } 
        case 'Vasárnap': { 
          if(!this.check(this.v_Assignments, element)){
            this.v_Assignments.push(element);
          }
          break; 
       } 
      }
      i++;
      
    };    
  }

  check(Object_array: Array<Assignment>, Object_element: Assignment){
    for(let i=0; i<Object_array.length; i++){
      if(Object_array[i].id == Object_element.id){
        return true;
      }
    }
    return false;
  }
  

  ngOnInit(): void{    
    this.assign_ser.getAll().subscribe((data: Array<Assignment>) => {      
      this.separate(data);  
  
      //console.log(data);
      //console.log(this.h_Assignments);              
      //console.log(data);
      //console.log(this.h_Assignments);

      
    });
  }


/*    
      
      */
}