import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptstartupsPage } from './inscriptstartups.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptstartupsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptstartupsPageRoutingModule {}
