import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/Modelo/Persona';
import { Proyecto } from 'src/app/Modelo/Proyecto';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {


  proyectoNuevo: Proyecto = new Proyecto(0,'','','',new Persona(0,'','','','','',''))
  personas: Persona[] = [];

   constructor(
     private proyectoService: ProyectoService,
     private personaService: PersonaService,
     private activatedRoute: ActivatedRoute,
     private toastr: ToastrService,
     private router: Router
   ) {}
 
   ngOnInit(): void {
    this.personaService.lista().subscribe(
      res=>{this.personas=res},
      err=>console.log(err)
    )
    this.activatedRoute.params.subscribe(params=> {
      let id:number = params['id'];
      if (id){
        this.proyectoService.detail(id).subscribe(res=>this.proyectoNuevo=res);
      }
    })
   }

   onCreate(): void {
    this.proyectoService.save(this.proyectoNuevo).subscribe(
      (data) => {
        this.toastr.success('Proyecto Creado', 'Guardado', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/portfolioedit']);
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        //this.router.navigate(['/']);
      }
    );
  }

  actualizarProyecto(){
    this.proyectoService.update(this.proyectoNuevo).subscribe(response =>{
      this.toastr.success('Proyecto Actualizado', 'Guardado', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      });
      this.router.navigate(['/portfolioedit']);
    },)
  }
 }
 