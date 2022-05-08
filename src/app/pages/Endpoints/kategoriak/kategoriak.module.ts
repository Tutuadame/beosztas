import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KategoriakRoutingModule } from './kategoriak-routing.module';
import { KategoriakComponent } from './kategoriak.component';
import { HomeComponent } from '../../Components/home/home.component';



@NgModule({
  declarations: [
    HomeComponent,
    KategoriakComponent,
  ],
  imports: [
    CommonModule,
    KategoriakRoutingModule
  ],
})
export class KategoriakModule { }
