import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeosztasokRoutingModule } from './beosztasok-routing.module';
import { BeosztasokComponent } from './beosztasok.component';
import { BViewComponent } from '../../Components/b-view/b-view.component';
import { BFieldComponent } from '../../Components/b-view/b-field/b-field.component';
import { HoverDirective } from '../../Components/b-view/b-field/directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule
  ]
})
export class BeosztasokModule { }
