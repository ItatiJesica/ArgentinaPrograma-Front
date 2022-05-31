import { Persona } from './Persona';

export class Proyecto {
  idPro: number;
  descripcion: string;
  logo: string;
  nombre: string;
  persona: Persona;

  constructor(
    idPro: number,
    descripcion: string,
    logo: string,
    nombre: string,
    persona: Persona
  ) {
    this.idPro = idPro;
    this.descripcion = descripcion;
    this.logo = logo;
    this.nombre = nombre;
    this.persona = persona;
  }
}
