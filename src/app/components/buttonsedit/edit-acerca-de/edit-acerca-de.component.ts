import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/Modelo/Experiencia';
import { Persona } from 'src/app/Modelo/Persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css'],
})
export class EditAcercaDeComponent implements OnInit {

  personaNueva: Persona= new Persona(0,'','','','','','');
  personas: Persona[] = [];
 
  constructor(
    private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.personaService.lista().subscribe(
      res=>{this.personas=res},
      err=>console.log(err)
    )
    this.activatedRoute.params.subscribe(params=> {
      let id:number = params['id'];
      if (id){
        this.personaService.detail(id).subscribe(res=>this.personaNueva=res);
      }
    })

  }

  actualizarPersona(){
    this.personaService.update(this.personaNueva).subscribe(response =>{
      this.toastr.success('Persona Actualizada', 'Guardado', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      });
      this.router.navigate(['/portfolioedit']);
    },)
  }
}
