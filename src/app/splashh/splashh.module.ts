import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplashhPageRoutingModule } from './splashh-routing.module';

import { SplashhPage } from './splashh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashhPageRoutingModule
  ],
  declarations: [SplashhPage]
})
export class SplashhPageModule {}
