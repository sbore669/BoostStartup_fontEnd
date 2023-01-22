import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaiementpretPage } from './paiementpret.page';

const routes: Routes = [
  {
    path: '',
    component: PaiementpretPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaiementpretPageRoutingModule {}
