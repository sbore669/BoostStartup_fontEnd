import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaiementActionPageRoutingModule } from './paiement-action-routing.module';

import { PaiementActionPage } from './paiement-action.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaiementActionPageRoutingModule
  ],
  declarations: [PaiementActionPage]
})
export class PaiementActionPageModule {}
