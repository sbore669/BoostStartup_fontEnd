import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaiementDonPage } from './paiement-don.page';

const routes: Routes = [
  {
    path: '',
    component: PaiementDonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaiementDonPageRoutingModule {}
