import { Component,  OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CouldWorkObject, AssistantObject } from '../../../pages/Objects/data';
import { createAssingment } from 'src/app/pages/Objects/Assingments';


@Component({
  selector: 'app-add-bar-b',
  templateUrl: './add-bar-b.component.html',
  styleUrls: ['./add-bar-b.component.css']
})
export class AddBarBComponent implements OnInit {

  constructor() { }

  assistants: Array<any> = [];
  couldWork: Array<any> = [];

  rendeles_id = new FormControl('');
  asszisztens_id = new FormControl('');

  ngOnInit() {
    this.assistants = AssistantObject;
    this.couldWork = CouldWorkObject;
  }

  callModifyAssingment(){
    //console.log(this.asszisztens_id.value, this.rendeles_id.value);
    //createAssingment(this.asszisztens_id.value, this.rendeles_id.value);
  }
}
