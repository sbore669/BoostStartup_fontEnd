import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaiementpretPageRoutingModule } from './paiementpret-routing.module';

import { PaiementpretPage } from './paiementpret.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaiementpretPageRoutingModule
  ],
  declarations: [PaiementpretPage]
})
export class PaiementpretPageModule {}
