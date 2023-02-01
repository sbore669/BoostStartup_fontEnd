import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonnateurPageRoutingModule } from './donnateur-routing.module';

import { DonnateurPage } from './donnateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonnateurPageRoutingModule
  ],
  declarations: [DonnateurPage]
})
export class DonnateurPageModule {}
