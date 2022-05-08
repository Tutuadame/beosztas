import { Component, OnInit } from '@angular/core';
import { CouldWorkObject } from '../../Objects/data';

@Component({
  selector: 'app-r-view',
  templateUrl: './r-view.component.html',
  styleUrls: ['./r-view.component.css']
})
export class RViewComponent implements OnInit {

  constructor() { }

  couldWork : Array<any> = CouldWorkObject;

  ngOnInit(): void {
  }


  handleDel(id: string){
    console.log(id);
  }
  handleMod(id: string){
    console.log(id);
  }

}
