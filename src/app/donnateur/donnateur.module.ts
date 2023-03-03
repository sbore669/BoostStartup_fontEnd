import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonnateurPageRoutingModule } from './donnateur-routing.module';

import { DonnateurPage } from './donnateur.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonnateurPageRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  declarations: [DonnateurPage]
})
export class DonnateurPageModule {}
