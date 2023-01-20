import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartupsPageRoutingModule } from './startups-routing.module';

import { StartupsPage } from './startups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartupsPageRoutingModule
  ],
  declarations: [StartupsPage]
})
export class StartupsPageModule {}
