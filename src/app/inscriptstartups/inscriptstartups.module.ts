import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptstartupsPageRoutingModule } from './inscriptstartups-routing.module';

import { InscriptstartupsPage } from './inscriptstartups.page';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptstartupsPageRoutingModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  declarations: [InscriptstartupsPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  
})
export class InscriptstartupsPageModule {}
