import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  @Input() currentPage: string = '';
  @Output() loadedPage: EventEmitter<string> = new EventEmitter();

  menuSwitch(selectedPage: string){
    this.selectedPage.emit(selectedPage);
  }


  getPage(){
    this.loadedPage.emit(this.currentPage);
  }

  ngOnInit(): void {
  }



}
