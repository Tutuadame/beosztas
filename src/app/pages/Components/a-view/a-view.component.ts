import { Component, OnInit } from '@angular/core';
import { AssistantObject } from '../../Objects/data';
import { deleteAssistant } from '../../Objects/Assistant';

@Component({
  selector: 'app-a-view',
  templateUrl: './a-view.component.html',
  styleUrls: ['./a-view.component.css']
})
export class AViewComponent implements OnInit {

  constructor() { }

  assistants: Array<any> = AssistantObject;

  handleDel(id: string){
    //deleteAssistant(id);
    console.log(id);
  }


  handleMod(id: string){
    console.log(id);
  }


  ngOnInit(): void {
  }

}
