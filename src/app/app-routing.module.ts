import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersGuardsService as guard } from './guards/pers-guards.service';

import { LoginComponent } from './components/auth/login.component';
import {MenuComponent } from './components/menu/menu.component';


import { PortfolioeditComponent } from './components/portfolioedit/portfolioedit.component';
import { EditAcercaDeComponent } from './components/buttonsedit/edit-acerca-de/edit-acerca-de.component';
import { EditEducacionComponent } from './components/buttonsedit/edit-educacion/edit-educacion.component';
import { EditExperienciaComponent } from './components/buttonsedit/edit-experiencia/edit-experiencia.component';
import { EditHabilidadesComponent } from './components/buttonsedit/edit-habilidades/edit-habilidades.component';
import { EditProyectosComponent } from './components/buttonsedit/edit-proyectos/edit-proyectos.component';

import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { AcercaDeComponent } from './components/portfolioedit/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/portfolioedit/educacion/educacion.component';
import { ExperienciaComponent } from './components/portfolioedit/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/portfolioedit/habilidades/habilidades.component';
import { ProyectosComponent } from './components/portfolioedit/proyectos/proyectos.component';


const routes: Routes = [
  {path:'',redirectTo:'porfolio', pathMatch:'full'},

  {path: 'portfolioedit',component:PortfolioeditComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path: 'acercade',component:AcercaDeComponent},
  {path: 'experiencia',component:ExperienciaComponent},
  {path: 'educacion',component:EducacionComponent},
  {path: 'habilidad',component:HabilidadesComponent},
  {path: 'proyecto',component:ProyectosComponent},

  {path: 'porfolio',component:PorfolioComponent},//vista de usuario

  //botones editar y agregar
  //  {path: 'edit-acerca-de/:id',component:EditAcercaDeComponent, canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path: 'edit-acerca-de/:id',component:EditAcercaDeComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},

  {path: 'edit-educacion/:id',component:EditEducacionComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path: 'edit-educacion',component:EditEducacionComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},

  {path: 'edit-experiencia',component:EditExperienciaComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path: 'edit-experiencia/:id',component:EditExperienciaComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},

  {path: 'edit-habilidades',component:EditHabilidadesComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path: 'edit-habilidades/:id',component:EditHabilidadesComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},

  {path: 'edit-proyectos',component:EditProyectosComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path: 'edit-proyectos/:id',component:EditProyectosComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},

  //sobre el login
  {path: 'login', component:LoginComponent},
  {path:'menu', component:MenuComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
