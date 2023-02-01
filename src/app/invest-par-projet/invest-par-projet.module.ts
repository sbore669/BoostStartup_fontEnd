import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestParProjetPageRoutingModule } from './invest-par-projet-routing.module';

import { InvestParProjetPage } from './invest-par-projet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestParProjetPageRoutingModule
  ],
  declarations: [InvestParProjetPage]
})
export class InvestParProjetPageModule {}
