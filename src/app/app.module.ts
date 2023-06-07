import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicioAutobusesVisitasService } from 'src/_servicio/servicio-autobuses-visitas.service';
import { HttpClientModule } from '@angular/common/http';
import { AutobusesComponent } from './autobuses/autobuses.component';

@NgModule({
  declarations: [
    AppComponent,
    AutobusesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ServicioAutobusesVisitasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
