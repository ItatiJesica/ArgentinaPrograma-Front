import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/Modelo/Educacion';
import { Persona } from 'src/app/Modelo/Persona';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacionNueva: Educacion = new Educacion(0,'','','','','','', new Persona(0,'','','','','',''))
  personas: Persona[] = [];

  constructor(
    private educacionService: EducacionService,
    private activatedRoute: ActivatedRoute,
    private personaService: PersonaService,
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
        this.educacionService.detail(id).subscribe(res=>this.educacionNueva=res);
      }
    })
  }
  onCreate(): void {
    this.educacionService.save(this.educacionNueva).subscribe(
      (data) => {
        this.toastr.success('Educación Creada', 'Guardado', {
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

  actualizarEducacion(){
    this.educacionService.update(this.educacionNueva).subscribe(response =>{
      this.toastr.success('Educación Actualizada', 'Guardado', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      });
      this.router.navigate(['/portfolioedit']);
    },)
  }
}
