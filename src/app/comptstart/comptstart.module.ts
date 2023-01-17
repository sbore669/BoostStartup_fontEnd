import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComptstartPageRoutingModule } from './comptstart-routing.module';

import { ComptstartPage } from './comptstart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComptstartPageRoutingModule
  ],
  declarations: [ComptstartPage]
})
export class ComptstartPageModule {}
