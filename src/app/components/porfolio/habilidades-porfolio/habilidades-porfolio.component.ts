import { Component, OnInit } from '@angular/core';
import { faEdit, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Habilidad } from 'src/app/Modelo/Habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades-porfolio',
  templateUrl: './habilidades-porfolio.component.html',
  styleUrls: ['./habilidades-porfolio.component.css'],
})
export class HabilidadesPorfolioComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faEdit = faEdit;
  habilidades: Habilidad[] = [];
  load=false;
  constructor(private habilidadService: HabilidadService) {}
  ngOnInit(): void {
    this.listarHabilidad();
  }

  listarHabilidad() {
    this.habilidadService.lista().subscribe(
      (res) => {
        this.load=true;
        this.habilidades = res;
      },
      (err) => console.log(err)
    );
  }
}
