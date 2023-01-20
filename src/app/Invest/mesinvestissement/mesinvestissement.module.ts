import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesinvestissementPageRoutingModule } from './mesinvestissement-routing.module';

import { MesinvestissementPage } from './mesinvestissement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesinvestissementPageRoutingModule
  ],
  declarations: [MesinvestissementPage]
})
export class MesinvestissementPageModule {}
