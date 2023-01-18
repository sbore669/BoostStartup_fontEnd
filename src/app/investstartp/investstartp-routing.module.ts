import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InveststartpPage } from './investstartp.page';

const routes: Routes = [
  {
    path: '',
    component: InveststartpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InveststartpPageRoutingModule {}
