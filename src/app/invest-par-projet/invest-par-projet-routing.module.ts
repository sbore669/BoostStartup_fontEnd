import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestParProjetPage } from './invest-par-projet.page';

const routes: Routes = [
  {
    path: '',
    component: InvestParProjetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestParProjetPageRoutingModule {}
