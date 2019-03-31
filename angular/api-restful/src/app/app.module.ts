import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// components
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ListadoComponent } from './components/libros/listado/listado.component';
import { NewComponent } from './components/libros/new/new.component';

// services
import { LibrosService } from './services/libros.service';
import { EditComponent } from './components/libros/edit/edit.component';
import { DeleteComponent } from './components/libros/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavbarComponent,
    NewComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
