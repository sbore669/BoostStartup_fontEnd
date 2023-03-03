import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InveststartpPageRoutingModule } from './investstartp-routing.module';

import { InveststartpPage } from './investstartp.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InveststartpPageRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  declarations: [InveststartpPage]
})
export class InveststartpPageModule {}
