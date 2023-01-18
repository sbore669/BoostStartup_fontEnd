import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'connexion',
   // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
   loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)

  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./debut/debut.module').then( m => m.DebutPageModule)
  },
  {
    path: 'typecompte',
    loadChildren: () => import('./typecompte/typecompte.module').then( m => m.TypecomptePageModule)
  },
  {
    path: 'splashh',
    loadChildren: () => import('./splashh/splashh.module').then( m => m.SplashhPageModule)
  },
  {
    path: 'comptstart',
    loadChildren: () => import('./comptstart/comptstart.module').then( m => m.ComptstartPageModule)
  },
  {
    path: 'dashbord-start',
    loadChildren: () => import('./dashbord-start/dashbord-start.module').then( m => m.DashbordStartPageModule)
  },
  {
    path: 'inscriptstartups',
    loadChildren: () => import('./inscriptstartups/inscriptstartups.module').then( m => m.InscriptstartupsPageModule)
  },
  {
    path: 'validation',
    loadChildren: () => import('./validation/validation.module').then( m => m.ValidationPageModule)
  },
  {
    path: 'statistique',
    loadChildren: () => import('./statistique/statistique.module').then( m => m.StatistiquePageModule)
  },
  {
    path: 'projetstartups',
    loadChildren: () => import('./projetstartups/projetstartups.module').then( m => m.ProjetstartupsPageModule)
  },
  {
    path: 'investstartp',
    loadChildren: () => import('./investstartp/investstartp.module').then( m => m.InveststartpPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
