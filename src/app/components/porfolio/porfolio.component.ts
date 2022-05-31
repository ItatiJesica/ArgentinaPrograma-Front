import { Component, OnInit } from '@angular/core';
import { faEdit, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
