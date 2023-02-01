import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonnateurPage } from './donnateur.page';

const routes: Routes = [
  {
    path: '',
    component: DonnateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonnateurPageRoutingModule {}
