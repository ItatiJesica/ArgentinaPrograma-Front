import { Component, OnInit } from '@angular/core';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Habilidad } from 'src/app/Modelo/Habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faEdit = faEdit;
  habilidades: Habilidad[] = [];

  constructor(
    private habilidadService: HabilidadService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.listarHabilidad();
  }

  listarHabilidad() {
    this.habilidadService.lista().subscribe(
      (res) => {
        this.habilidades = res;
      },
      (err) => console.log(err)
    );
  }
  
  eliminarHab(idHab: number) {
    this.habilidadService.delete(idHab).subscribe(
      (data) => {
        this.toastr.success('Habilidad Eliminada', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.listarHabilidad();
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      }
    );
  }
}


