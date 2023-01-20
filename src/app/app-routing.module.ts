import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {

    path: '',
    redirectTo:'debut',
    pathMatch:'full'
    // loadChildren: () => import('./debut/debut.module').then( m => m.DebutPageModule)
  },
  {
    path: 'connexion',
   // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
   loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)

  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
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

    path: 'debut',
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
  },
  {
    path: '',
    loadChildren: () => import('./tabac/tabac.module').then( m => m.TabacPageModule)
  },
  {
    path: 'acceuil',
    loadChildren: () => import('./Invest/acceuil/acceuil.module').then( m => m.AcceuilPageModule)
  },
  {
    path: 'mesinvestissement',
    loadChildren: () => import('./Invest/mesinvestissement/mesinvestissement.module').then( m => m.MesinvestissementPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./Invest/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'startups',
    loadChildren: () => import('./Invest/startups/startups.module').then( m => m.StartupsPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./Invest/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'detailprojet',
    loadChildren: () => import('./Invest/detailprojet/detailprojet.module').then( m => m.DetailprojetPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
