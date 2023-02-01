import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashbord-start',
        loadChildren: () => import('../dashbord-start/dashbord-start.module').then( m => m.DashbordStartPageModule)
      },
      {
        path: 'statistique',
        loadChildren: () => import('../statistique/statistique.module').then( m => m.StatistiquePageModule)
      },
      {
        path: 'invest-par-projet',
        loadChildren: () => import('../invest-par-projet/invest-par-projet.module').then( m => m.InvestParProjetPageModule)
      },
      {
        path: 'projetstartups',
        loadChildren: () => import('../projetstartups/projetstartups.module').then( m => m.ProjetstartupsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/dashbord-start',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashbord-start',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
