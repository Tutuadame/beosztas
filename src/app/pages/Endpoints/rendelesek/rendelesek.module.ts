import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RendelesekRoutingModule } from './rendelesek-routing.module';
import { RendelesekComponent } from './rendelesek.component';
import { RViewComponent } from '../../Components/r-view/r-view.component';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { ChangeRendlesDirective } from "../../Components/r-view/directive";


@NgModule({
  declarations: [
    RendelesekComponent,
    RViewComponent,
    ChangeRendlesDirective
  ],
  imports: [
    CommonModule,
    RendelesekRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,    
  ]
})
export class RendelesekModule { }
