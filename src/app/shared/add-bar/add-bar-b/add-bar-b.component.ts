import { Component,  ElementRef,  OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AssistantService } from 'src/app/services/assistants/assistant.service';
import {Subscription} from "rxjs";
import { Assistant, CouldWork } from 'src/app/pages/Objects/interfaces';
import { CouldworkService } from 'src/app/services/couldworks/couldwork.service';
import { AssignmentService } from 'src/app/services/assignments/assignment.service';



@Component({
  selector: 'app-add-bar-b',
  templateUrl: './add-bar-b.component.html',
  styleUrls: ['./add-bar-b.component.css']
})
export class AddBarBComponent implements OnInit {

  constructor(private a_s: AssistantService, private c_s: CouldworkService, private assign_ser: AssignmentService, private elRef: ElementRef) { }

  assistants: Array<any> = [];
  couldWork: Array<any> = [];
  subscriptions: Array<Subscription> = [];

  rendeles_id = new FormControl('');
  asszisztens_id = new FormControl('');
  beosztas_id = new FormControl('');

  ngOnInit() {
    this.subscriptions.concat(this.a_s.getAll().subscribe((data: Array<Assistant>) => {
      this.assistants = data;
    }));
    this.subscriptions.concat(this.c_s.getAll().subscribe((data2: Array<CouldWork>) => {
      this.couldWork = data2;
    }));
    
  }

  callModifyAssignment(){    
    let beosztas_id = this.elRef.nativeElement.parentNode.firstChild.id;    
    this.assign_ser.update(this.asszisztens_id.value, this.rendeles_id.value, beosztas_id);
    window.location.reload();
  }
}
