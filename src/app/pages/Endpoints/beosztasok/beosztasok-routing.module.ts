import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeosztasokComponent } from './beosztasok.component';

const routes: Routes = [{ path: '', component: BeosztasokComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeosztasokRoutingModule { }
