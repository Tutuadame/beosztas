import { Component, OnInit } from '@angular/core';
import { AssignmentService } from 'src/app/services/assignments/assignment.service';
import { Assignment } from '../../Objects/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-b-view',
  templateUrl: './b-view.component.html',
  styleUrls: ['./b-view.component.css']
})
export class BViewComponent implements OnInit {

  constructor(private assign_ser: AssignmentService) {}
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
          this.h_Assignments.push(element);
          break; 
       } 
        case 'Kedd': { 
          this.k_Assignments.push(element);
          break; 
       } 
       
        case 'Szerda': {           
          this.sze_Assignments.push(element);
          break; 
       } 
      
        case 'Csütörtök': { 
          this.cs_Assignments.push(element);
          break; 
       } 
       
        case 'Péntek': {           
          this.p_Assignments.push(element);
          break; 
       } 

        case 'Szombat': { 

          this.sz_Assignments.push(element);
          break; 
       } 
        case 'Vasárnap': { 
          this.v_Assignments.push(element);
          break; 
       } 
      }
      i++;
      
    };    
  }

  ngOnInit(): void{
    this.subscriptions.concat(this.assign_ser.getAll().subscribe((data: Array<Assignment>) => {
      let length = this.h_Assignments.length + this.k_Assignments.length + this.sze_Assignments.length + this.cs_Assignments.length + this.p_Assignments.length + this.sz_Assignments.length + this.v_Assignments.length;
      if(length < data.length){
        this.separate(data);
      }      
    })); 
  }
}

export function modifyCouldWork(id: string){
  console.log(id);
}

export function deleteCouldWork(id: string){
  console.log(id);
}
