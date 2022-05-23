import { Component, OnInit } from '@angular/core';
import { AssistantService } from 'src/app/services/assistants/assistant.service';
import { Subscription } from 'rxjs';
import { Assistant } from '../../Objects/interfaces';


@Component({
  selector: 'app-a-view',
  templateUrl: './a-view.component.html',
  styleUrls: ['./a-view.component.css']
})
export class AViewComponent implements OnInit {

  constructor(private assistant_ser: AssistantService) { }

  assistants: Array<any> = [];
  subscriptions: Array<Subscription> = [];


  handleDel(id: string){
    //deleteAssistant(id);
   this.assistant_ser.delete(id);
  }

  ngOnInit(): void {
    this.subscriptions.concat(this.assistant_ser.getAll().subscribe((data: Array<Assistant>) => {
      this.assistants = data;
    }));
  }
}
