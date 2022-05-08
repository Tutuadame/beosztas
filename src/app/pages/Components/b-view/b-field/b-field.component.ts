import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { elementAt, fromEvent, Observable } from 'rxjs';



@Component({
  selector: 'app-b-field',
  templateUrl: './b-field.component.html',
  styleUrls: ['./b-field.component.css']
})
export class BFieldComponent implements OnInit{

  constructor() { }

  @Input() rname: any;
  @Input() begin: any;
  @Input() end: any;
  @Input() assistant: any;
  @Input() doctor: any;
  @Input() id: any;


  ngOnInit(){
  }

}
