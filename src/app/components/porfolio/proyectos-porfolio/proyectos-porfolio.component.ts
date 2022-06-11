import { Component, OnInit } from '@angular/core';
import { faEdit, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Proyecto } from 'src/app/Modelo/Proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos-porfolio',
  templateUrl: './proyectos-porfolio.component.html',
  styleUrls: ['./proyectos-porfolio.component.css']
})
export class ProyectosPorfolioComponent implements OnInit {
  faPlusCircle= faPlusCircle;
  faEdit= faEdit;
  proyectos: Proyecto[]=[];
  load=false;

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.listarProyectos();
  }

  listarProyectos(){
    this.proyectoService.lista().subscribe(
      res=>{
        this.load=true;
        this.proyectos=res},
      err=>console.log(err)
    )
  }
}
