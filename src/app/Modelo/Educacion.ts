import { Persona } from './Persona';

export class Educacion {
  idEd: number;
  fin: string;
  inicio: string;
  institucion: string;
  logo: string;
  titulo: string;
  ubicacion: string;
  persona: Persona;

  constructor(
    idEd: number,
    fin: string,
    inicio: string,
    institucion: string,
    logo: string,
    titulo: string,
    ubicacion: string,
    persona: Persona
  ) {
    this.idEd= idEd;
    this.fin = fin;
    this.inicio = inicio;
    this.institucion = institucion;
    this.logo = logo;
    this.titulo = titulo;
    this.ubicacion = ubicacion;
    this.persona = persona;
  }
}
