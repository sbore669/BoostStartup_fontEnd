import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InveststartpPageRoutingModule } from './investstartp-routing.module';

import { InveststartpPage } from './investstartp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InveststartpPageRoutingModule
  ],
  declarations: [InveststartpPage]
})
export class InveststartpPageModule {}
