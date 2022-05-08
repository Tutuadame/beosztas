import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsszisztensekRoutingModule } from './asszisztensek-routing.module';
import { AsszisztensekComponent } from './asszisztensek.component';
import { AppModule } from 'src/app/app.module';
import { AViewComponent } from '../../Components/a-view/a-view.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AsszisztensekComponent,
    AViewComponent
  ],
  imports: [
    CommonModule,
    AsszisztensekRoutingModule,
    MatButtonModule
  ]
})
export class AsszisztensekModule { }
