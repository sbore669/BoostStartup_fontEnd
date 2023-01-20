import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartupsPage } from './startups.page';

const routes: Routes = [
  {
    path: '',
    component: StartupsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartupsPageRoutingModule {}
