import { Component, OnInit } from '@angular/core';
import { faEdit, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from 'src/app/Modelo/Proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  faPlusCircle= faPlusCircle;
  faEdit= faEdit;
  proyectos: Proyecto[]=[];
 

  constructor(private proyectoService: ProyectoService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.listarProyectos();
  }

  listarProyectos() {
    this.proyectoService.lista().subscribe(
      (res) => {
        this.proyectos = res;
      },
      (err) => console.log(err)
    );
  }
  
  eliminarPro(idPro: number) {
    this.proyectoService.delete(idPro).subscribe(
      (data) => {
        this.toastr.success('Proyecto Eliminado', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.listarProyectos();
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