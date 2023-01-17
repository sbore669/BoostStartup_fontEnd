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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
