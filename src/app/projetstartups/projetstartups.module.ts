import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetstartupsPageRoutingModule } from './projetstartups-routing.module';

import { ProjetstartupsPage } from './projetstartups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetstartupsPageRoutingModule
  ],
  declarations: [ProjetstartupsPage]
})
export class ProjetstartupsPageModule {}
