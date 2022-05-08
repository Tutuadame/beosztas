import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RendelesekComponent } from './rendelesek.component';
import { RViewComponent } from '../../Components/r-view/r-view.component'; 

const routes: Routes = [{ path: '', component: RendelesekComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RendelesekRoutingModule { }
