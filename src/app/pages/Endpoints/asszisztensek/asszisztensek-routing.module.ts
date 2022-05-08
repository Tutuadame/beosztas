import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AViewComponent } from '../../Components/a-view/a-view.component';
import { AsszisztensekComponent } from './asszisztensek.component';

const routes: Routes = [{ path: '', component: AsszisztensekComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsszisztensekRoutingModule { }
