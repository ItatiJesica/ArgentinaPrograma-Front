import { Component, OnInit } from '@angular/core';
import { faEdit, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Educacion } from 'src/app/Modelo/Educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion-porfolio',
  templateUrl: './educacion-porfolio.component.html',
  styleUrls: ['./educacion-porfolio.component.css']
})
export class EducacionPorfolioComponent implements OnInit {
  faPlusCircle= faPlusCircle;
  faEdit = faEdit;
  educacion: Educacion[]=[];


  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.listarEducacion();
  }

  listarEducacion(){
    this.educacionService.lista().subscribe(
      res=>{this.educacion=res},
      err=>console.log(err)
    )
  }
  

}