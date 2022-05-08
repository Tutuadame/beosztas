import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BFieldComponent } from '../../Components/b-view/b-field/b-field.component';
import { HoverDirective } from '../../Components/b-view/b-field/directive';
import { BViewButtonsComponent } from '../../Components/b-view/b-view-buttons/b-view-buttons.component';
import { BViewComponent } from '../../Components/b-view/b-view.component';
import { BeosztasokComponent } from './beosztasok.component';

const routes: Routes = [{ path: '', component: BeosztasokComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeosztasokRoutingModule { }
