import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   path: 'home',
   loadChildren: () => import('./pages/Endpoints/kategoriak/kategoriak.module').then(m => m.KategoriakModule)
  },
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo: '/home',
  },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
