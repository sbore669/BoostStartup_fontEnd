import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypecomptePageRoutingModule } from './typecompte-routing.module';

import { TypecomptePage } from './typecompte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypecomptePageRoutingModule
  ],
  declarations: [TypecomptePage]
})
export class TypecomptePageModule {}
