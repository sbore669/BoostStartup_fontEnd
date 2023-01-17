import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypecomptePage } from './typecompte.page';

const routes: Routes = [
  {
    path: '',
    component: TypecomptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypecomptePageRoutingModule {}
