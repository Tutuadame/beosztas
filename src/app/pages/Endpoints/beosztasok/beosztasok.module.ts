import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeosztasokRoutingModule } from './beosztasok-routing.module';
import { BeosztasokComponent } from './beosztasok.component';
import { BViewButtonsComponent } from '../../Components/b-view/b-view-buttons/b-view-buttons.component';
import { BViewComponent } from '../../Components/b-view/b-view.component';
import { BFieldComponent } from '../../Components/b-view/b-field/b-field.component';
import { HoverDirective } from '../../Components/b-view/b-field/directive';
import { Change2Directive, ChangeDirective } from '../../Components/b-view/b-view-buttons/directive';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    BeosztasokComponent,
    BViewButtonsComponent,
    BViewComponent,
    BFieldComponent,
    HoverDirective,
    ChangeDirective,
    Change2Directive,

 
  ],
  imports: [
    CommonModule,
    BeosztasokRoutingModule,
    FlexLayoutModule
  ]
})
export class BeosztasokModule { }
