import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashbordStartPage } from './dashbord-start.page';

const routes: Routes = [
  {
    path: '',
    component: DashbordStartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashbordStartPageRoutingModule {}
