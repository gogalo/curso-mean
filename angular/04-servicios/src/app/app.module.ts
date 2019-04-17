import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { ResultadosService } from './resultados.service';

// services

@NgModule({
  declarations: [
    AppComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ResultadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
