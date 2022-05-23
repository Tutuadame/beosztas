import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsszisztensekRoutingModule } from './asszisztensek-routing.module';
import { AsszisztensekComponent } from './asszisztensek.component';
import { AppModule } from 'src/app/app.module';
import { AViewComponent } from '../../Components/a-view/a-view.component';
import { MatButtonModule } from '@angular/material/button';
import { ChangeAsszisztensDirective } from '../../Components/a-view/directives';

@NgModule({
  declarations: [
    AsszisztensekComponent,
    AViewComponent,
    ChangeAsszisztensDirective
    
  ],
  imports: [
    CommonModule,
    AsszisztensekRoutingModule,
    MatButtonModule
  ]
})
export class AsszisztensekModule { }
