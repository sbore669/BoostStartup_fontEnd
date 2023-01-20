import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailprojetPage } from './detailprojet.page';

const routes: Routes = [
  {
    path: '',
    component: DetailprojetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailprojetPageRoutingModule {}
