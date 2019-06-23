import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes - Paginas
import { MainComponent } from './pages/main/main.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'Servicios', component: ServiciosComponent},
  {path: '**', pathMatch:'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
