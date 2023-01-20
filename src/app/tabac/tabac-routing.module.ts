import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabacPage } from './tabac.page';

const routes: Routes = [
  {
    path: 'tabac',
    component: TabacPage,
    children: [
      {
        path: 'acceuil',
        loadChildren: () => import('../Invest/acceuil/acceuil.module').then( m => m.AcceuilPageModule)
      },
      {
        path: 'mesinvestissement',
        loadChildren: () => import('../Invest/mesinvestissement/mesinvestissement.module').then( m => m.MesinvestissementPageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../Invest/notification/notification.module').then( m => m.NotificationPageModule)
      },
      {
        path: 'startups',
        loadChildren: () => import('../Invest/startups/startups.module').then( m => m.StartupsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/acceuil',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/acceuil',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabacPageRoutingModule {}
