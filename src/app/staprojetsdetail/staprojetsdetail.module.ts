import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaprojetsdetailPageRoutingModule } from './staprojetsdetail-routing.module';

import { StaprojetsdetailPage } from './staprojetsdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaprojetsdetailPageRoutingModule
  ],
  declarations: [StaprojetsdetailPage]
})
export class StaprojetsdetailPageModule {}
