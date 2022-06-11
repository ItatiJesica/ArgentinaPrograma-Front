import { Component, OnInit } from '@angular/core';
import { faEdit, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from 'src/app/Modelo/Experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia-porfolio',
  templateUrl: './experiencia-porfolio.component.html',
  styleUrls: ['./experiencia-porfolio.component.css'],
})
export class ExperienciaPorfolioComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faEdit = faEdit;
  experiencias: Experiencia[] = [];
  load=false;

  constructor(private experienciaService: ExperienciaService) {}

  ngOnInit(): void {
    this.listarExperiencia();
  }

  listarExperiencia() {
    this.experienciaService.lista().subscribe(
      (res) => {
        this.load=true;
        this.experiencias = res;
      },
      (err) => console.log(err)
    );
    }

}

