import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeosztasokRoutingModule } from './beosztasok-routing.module';
import { BViewComponent } from '../../Components/b-view/b-view.component';
import { BFieldComponent } from '../../Components/b-view/b-field/b-field.component';
import { HoverDirective } from '../../Components/b-view/b-field/directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { ServiceWorkerModule } from "@angular/service-worker";
import { BeosztasokComponent } from './beosztasok.component';

@NgModule({
  declarations: [  
    BeosztasokComponent,
    BViewComponent,
    BFieldComponent,
    HoverDirective,    
  ],
  imports: [
    CommonModule,
    BeosztasokRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    HttpClientModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),
  ]
})
export class BeosztasokModule { }
