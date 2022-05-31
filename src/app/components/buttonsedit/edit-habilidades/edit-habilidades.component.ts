import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Habilidad } from 'src/app/Modelo/Habilidad';
import { Persona } from 'src/app/Modelo/Persona';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent implements OnInit {
  habilidadNueva: Habilidad = new Habilidad(0,'','',0,new Persona(0,'','','','','',''))
  personas: Persona[] = [];
 
  constructor(
    private habilidadService: HabilidadService,
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
        this.habilidadService.detail(id).subscribe(res=>this.habilidadNueva=res);
      }
    })
  }
  
  onCreate(): void {
    this.habilidadService.save(this.habilidadNueva).subscribe(
      (data) => {
        this.toastr.success('Habilidad Creada', 'Guardado', {
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

  actualizarHabilidad(){
    this.habilidadService.update(this.habilidadNueva).subscribe(response =>{
      this.toastr.success('Habilidad Actualizada', 'Guardado', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
      });
      this.router.navigate(['/portfolioedit']);
    },)
  }
}
