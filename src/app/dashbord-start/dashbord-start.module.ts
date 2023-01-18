import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashbordStartPageRoutingModule } from './dashbord-start-routing.module';

import { DashbordStartPage } from './dashbord-start.page';



@NgModule({
    declarations: [DashbordStartPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DashbordStartPageRoutingModule,

    ]
})
export class DashbordStartPageModule {}
