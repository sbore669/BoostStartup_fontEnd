import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabacPageRoutingModule } from './tabac-routing.module';

import { TabacPage } from './tabac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabacPageRoutingModule
  ],
  declarations: [TabacPage]
})
export class TabacPageModule {}
