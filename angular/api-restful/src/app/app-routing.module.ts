import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ListadoComponent } from './components/libros/listado/listado.component';
import { NewComponent } from './components/libros/new/new.component';
import { EditComponent } from './components/libros/edit/edit.component';
import { DeleteComponent } from './components/libros/delete/delete.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'libros', component: ListadoComponent },
  { path: 'libros/add', component: NewComponent },
  { path: 'libros/edit/:isbn', component: EditComponent },
  { path: 'libros/delete/:isbn', component: DeleteComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
