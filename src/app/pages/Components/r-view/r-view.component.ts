import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CouldworkService } from 'src/app/services/couldworks/couldwork.service';
import { CouldWork } from '../../Objects/interfaces';


@Component({
  selector: 'app-r-view',
  templateUrl: './r-view.component.html',
  styleUrls: ['./r-view.component.css']
})
export class RViewComponent implements OnInit {

  constructor(private couldwork_ser: CouldworkService) { }

  couldWork : Array<any> = [];
  subscriptions: Array<Subscription> = [];


  ngOnInit(): void {
    this.subscriptions.concat(this.couldwork_ser.getAll().subscribe((data: Array<CouldWork>) => {
      this.couldWork = data;
    }));
  }


  handleDel(id: string){
   this.couldwork_ser.delete(id);
  }

}
