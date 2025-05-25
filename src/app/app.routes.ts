import { Routes } from '@angular/router';
import { PuntoAComponent } from './components/punto-a/punto-a.component';
import { PuntoBComponent } from './components/punto-b/punto-b.component';
import { PuntoCComponent } from './components/punto-c/punto-c.component';
import { PuntoDComponent } from './components/punto-d/punto-d.component';
import { PuntoEComponent } from './components/punto-e/punto-e.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { NoticiaDetalleComponent } from './components/noticia-detalle/noticia-detalle.component';

export const routes: Routes = [
  {
    path: 'puntoA',
    component: PuntoAComponent,
  },
  {
    path: 'puntoB',
    component: PuntoBComponent,
  },
  {
    path: 'puntoC',
    component: PuntoCComponent,
  },
  {
    path: 'puntoD',
    component: PuntoDComponent,
  },
  {
    path: 'puntoE',
    component: PuntoEComponent,
  },
  {
    path: 'traductor',
    component: TraductorComponent,
  },
  { 
    path: '', component: PuntoAComponent
  },
  { 
    path: 'detalle/:id', component: NoticiaDetalleComponent
  },
  { 
    path: '**', pathMatch: 'full', redirectTo: 'puntoA'
  },
];
