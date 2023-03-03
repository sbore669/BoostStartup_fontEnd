import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreteurPageRoutingModule } from './preteur-routing.module';

import { PreteurPage } from './preteur.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreteurPageRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  declarations: [PreteurPage]
})
export class PreteurPageModule {}
