import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/Modelo/Educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faEdit = faEdit;
  educacion: Educacion[] = [];

  constructor(
    private educacionService: EducacionService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.listarEducacion();
  }

  listarEducacion() {
    this.educacionService.lista().subscribe(
      (res) => {
        this.educacion = res;
      },
      (err) => console.log(err)
    );
  }
  
  eliminarEd(idEd: number) {
    this.educacionService.delete(idEd).subscribe(
      (data) => {
        this.toastr.success('Educación Eliminada', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.listarEducacion();
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
