import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KategoriakComponent } from './kategoriak.component';

const routes: Routes = [
  { 
    path: '',
    component: KategoriakComponent 
  },
  { 
   path: 'rendelesek',
   loadChildren: () => import('../rendelesek/rendelesek.module').then(m => m.RendelesekModule)
  },
  { 
   path: 'asszisztensek',
   loadChildren: () => import('../asszisztensek/asszisztensek.module').then(m => m.AsszisztensekModule)
  },
  {
  path: 'beosztasok',
  loadChildren: () => import('../beosztasok/beosztasok.module').then(m => m.BeosztasokModule)
  }
];

@NgModule({

  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KategoriakRoutingModule { }
