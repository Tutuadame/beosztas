import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-view-buttons',
  template: `            
              <button modify change id="modify">Módosítás</button>
              <button delete change2 id="delete">Törlés</button>  
            `,
  styleUrls: ['./b-view-buttons.component.css']
})
export class BViewButtonsComponent implements OnInit {

  constructor() {}

  ngOnInit(){
  }

}
