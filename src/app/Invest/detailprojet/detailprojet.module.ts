import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailprojetPageRoutingModule } from './detailprojet-routing.module';

import { DetailprojetPage } from './detailprojet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailprojetPageRoutingModule
  ],
  declarations: [DetailprojetPage]
})
export class DetailprojetPageModule {}
