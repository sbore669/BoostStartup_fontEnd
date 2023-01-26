import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceuilPage } from './acceuil.page';

const routes: Routes = [
  {
    path: '',
    component: AcceuilPage
  },
  // {
  //   path: 'detailprojet/:idprojet',
  //   loadChildren: () => import('../../Invest/detailprojet/detailprojet.module').then( m => m.DetailprojetPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceuilPageRoutingModule {}
