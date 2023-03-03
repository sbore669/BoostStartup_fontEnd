import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { GuardsGuard } from './_services/guards.guard';
import { FormaddComponent } from './formadd/formadd.component';
import { ModifierStartupsComponent } from './modifier-startups/modifier-startups.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AppComponent,FormaddComponent,ModifierStartupsComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,    
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},httpInterceptorProviders,GuardsGuard],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
