import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilStartupsPage } from './profil-startups.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilStartupsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilStartupsPageRoutingModule {}
