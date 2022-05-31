import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Persona } from 'src/app/Modelo/Persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de-porfolio',
  templateUrl: './acerca-de-porfolio.component.html',
  styleUrls: ['./acerca-de-porfolio.component.css']
})
export class AcercaDePorfolioComponent implements OnInit {
  faEdit = faEdit;
  personas: Persona[]=[];
  
  constructor(private personaService: PersonaService) { 

  }

  ngOnInit(): void {
    this.listarPersonas();

  }

  listarPersonas(){
    this.personaService.lista().subscribe(
      res=>{this.personas=res},
      err=>console.log(err)
    )
  }
}
