import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreteurPage } from './preteur.page';

const routes: Routes = [
  {
    path: '',
    component: PreteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreteurPageRoutingModule {}
