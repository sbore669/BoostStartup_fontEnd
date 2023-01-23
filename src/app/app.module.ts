import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './_helpers/http.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,    
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgChartsModule,
    HttpClientModule,
    

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},httpInterceptorProviders],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
