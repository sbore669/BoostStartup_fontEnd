import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashhPage } from './splashh.page';

const routes: Routes = [
  {
    path: '',
    component: SplashhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashhPageRoutingModule {}
