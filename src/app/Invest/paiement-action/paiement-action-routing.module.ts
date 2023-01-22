import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaiementActionPage } from './paiement-action.page';

const routes: Routes = [
  {
    path: '',
    component: PaiementActionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaiementActionPageRoutingModule {}
