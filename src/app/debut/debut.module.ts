import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebutPageRoutingModule } from './debut-routing.module';

import { DebutPage } from './debut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebutPageRoutingModule
  ],
  declarations: [DebutPage]
})
export class DebutPageModule {}
