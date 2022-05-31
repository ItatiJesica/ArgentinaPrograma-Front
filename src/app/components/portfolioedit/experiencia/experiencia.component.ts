import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/Modelo/Experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faEdit = faEdit;
  experiencias: Experiencia[] = [];

  constructor(
    private experienciaService: ExperienciaService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.listarExperiencia();
  }

  listarExperiencia() {
    this.experienciaService.lista().subscribe(
      (res) => {
        this.experiencias = res;
      },
      (err) => console.log(err)
    );
  }
  
  eliminarExp(idExp: number) {
    this.experienciaService.delete(idExp).subscribe(
      (data) => {
        this.toastr.success('Experiencia Eliminada', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.listarExperiencia();
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
