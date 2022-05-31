import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEdit, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/Modelo/Persona';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faEdit = faEdit;
  personas: Persona[] = [];


  constructor(private personaService: PersonaService, private router: Router, private activatedRoute: ActivatedRoute,     private toastr: ToastrService,) {}

  ngOnInit(): void {
    this.listarPersonas();
  }

  
  listarPersonas(){
    this.personaService.lista().subscribe(
      res=>{this.personas=res;
      console.log(res)},
      err=>console.log(err)
    )
  }


}
