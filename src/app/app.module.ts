import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { interceptorProvider } from './interceptors/pers-interceptor.service';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoginComponent } from './components/auth/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ToastrModule } from 'ngx-toastr';

import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { AcercaDeComponent } from './components/portfolioedit/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/portfolioedit/experiencia/experiencia.component';
import { EducacionComponent } from './components/portfolioedit/educacion/educacion.component';
import { HabilidadesComponent } from './components/portfolioedit/habilidades/habilidades.component';
import { ProyectosComponent } from './components/portfolioedit/proyectos/proyectos.component';


import { PortfolioeditComponent } from './components/portfolioedit/portfolioedit.component';
import { AcercaDePorfolioComponent } from './components/porfolio/acerca-de-porfolio/acerca-de-porfolio.component';
import { ExperienciaPorfolioComponent } from './components/porfolio/experiencia-porfolio/experiencia-porfolio.component';
import { EducacionPorfolioComponent } from './components/porfolio/educacion-porfolio/educacion-porfolio.component';
import { HabilidadesPorfolioComponent } from './components/porfolio/habilidades-porfolio/habilidades-porfolio.component';
import { ProyectosPorfolioComponent } from './components/porfolio/proyectos-porfolio/proyectos-porfolio.component';

import { EditAcercaDeComponent } from './components/buttonsedit/edit-acerca-de/edit-acerca-de.component';
import { EditEducacionComponent } from './components/buttonsedit/edit-educacion/edit-educacion.component';
import { EditExperienciaComponent } from './components/buttonsedit/edit-experiencia/edit-experiencia.component';
import { EditHabilidadesComponent } from './components/buttonsedit/edit-habilidades/edit-habilidades.component';
import { EditProyectosComponent } from './components/buttonsedit/edit-proyectos/edit-proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    PorfolioComponent,
    MenuComponent,
    LoginComponent,
    PortfolioeditComponent,
    AcercaDePorfolioComponent,
    ExperienciaPorfolioComponent,
    EducacionPorfolioComponent,
    HabilidadesPorfolioComponent,
    ProyectosPorfolioComponent,
    EditAcercaDeComponent,
    EditEducacionComponent,
    EditExperienciaComponent,
    EditHabilidadesComponent,
    EditProyectosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
    }),
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgbModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
