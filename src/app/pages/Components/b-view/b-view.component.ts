import { Component, OnInit } from '@angular/core';
import { AssingmentsObject } from '../../Objects/data';
import { Assingment } from '../../Objects/interfaces';

@Component({
  selector: 'app-b-view',
  templateUrl: './b-view.component.html',
  styleUrls: ['./b-view.component.css']
})
export class BViewComponent implements OnInit {

  constructor() { }

  h_assingments: Array<Assingment> = []; 
  k_assingments: Array<Assingment> = []; 
  sze_assingments: Array<Assingment> = [];
  cs_assingments: Array<Assingment> = []; 
  p_assingments: Array<Assingment> = []; 
  sz_assingments: Array<Assingment> = []; 
  v_assingments: Array<Assingment> = []; 

  separate(Object: Array<Assingment>){
    Object.forEach(element => {
      switch(element.day){
        case 'Hétfő': { 
          this.h_assingments.push(element);
          break; 
       } 
        case 'Kedd': { 
          this.k_assingments.push(element);
          break; 
       } 
       
        case 'Szerda': { 
          this.sze_assingments.push(element);
          break; 
       } 
      
        case 'Csütörtök': { 
          this.cs_assingments.push(element);
          break; 
       } 
       
        case 'Péntek': { 
          this.p_assingments.push(element);
          break; 
       } 

        case 'Szombat': { 
          this.sz_assingments.push(element);
          break; 
       } 
        case 'Vasárnap': { 
          this.v_assingments.push(element);
          break; 
       } 
      }
    });
  }

  ngOnInit(): void {
    this.separate(AssingmentsObject);
  }
  

}


export function modifyCouldWork(id: string){
  console.log(id);
}

export function deleteCouldWork(id: string){
  console.log(id);
}
