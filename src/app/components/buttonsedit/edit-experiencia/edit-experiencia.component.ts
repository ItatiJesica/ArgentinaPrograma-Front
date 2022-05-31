import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/Modelo/Experiencia';
import { Persona } from 'src/app/Modelo/Persona';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  experienciaNueva: Experiencia = new Experiencia(0,'','','','','','','', new Persona(0,'','','','','',''));
  personas: Persona[] = [];



  constructor(
    private experienciaService: ExperienciaService,
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
          this.experienciaService.detail(id).subscribe(res=>this.experienciaNueva=res);
        }
      })
  }

  onCreate(): void {
    this.experienciaService.save(this.experienciaNueva).subscribe(
      (data) => {
        this.toastr.success('Experiencia Creada', 'Guardado', {
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

  actualizarExperiencia(){
    this.experienciaService.update(this.experienciaNueva).subscribe(response =>{
      this.toastr.success('Experiencia Actualizada', 'Guardado', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      });
      this.router.navigate(['/portfolioedit']);
    },)
  }
}