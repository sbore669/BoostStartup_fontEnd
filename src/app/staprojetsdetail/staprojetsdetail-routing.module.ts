import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaprojetsdetailPage } from './staprojetsdetail.page';

const routes: Routes = [
  {
    path: '',
    component: StaprojetsdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaprojetsdetailPageRoutingModule {}
