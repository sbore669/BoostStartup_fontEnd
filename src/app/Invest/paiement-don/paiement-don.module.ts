import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaiementDonPageRoutingModule } from './paiement-don-routing.module';

import { PaiementDonPage } from './paiement-don.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaiementDonPageRoutingModule
  ],
  declarations: [PaiementDonPage]
})
export class PaiementDonPageModule {}
