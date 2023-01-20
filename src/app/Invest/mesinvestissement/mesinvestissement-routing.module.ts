import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesinvestissementPage } from './mesinvestissement.page';

const routes: Routes = [
  {
    path: '',
    component: MesinvestissementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesinvestissementPageRoutingModule {}
