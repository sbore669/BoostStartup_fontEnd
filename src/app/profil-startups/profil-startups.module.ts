import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilStartupsPageRoutingModule } from './profil-startups-routing.module';

import { ProfilStartupsPage } from './profil-startups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilStartupsPageRoutingModule
  ],
  declarations: [ProfilStartupsPage]
})
export class ProfilStartupsPageModule {}
