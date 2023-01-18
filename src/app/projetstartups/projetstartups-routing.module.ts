import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetstartupsPage } from './projetstartups.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetstartupsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetstartupsPageRoutingModule {}
