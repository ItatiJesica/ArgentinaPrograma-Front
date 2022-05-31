import { Persona } from './Persona';

export class Habilidad {
  idHab: number;
  habilidad: string;
  logo: string;
  porcentaje: number;
  persona: Persona;

  constructor(
    idHab: number,
    habilidad: string,
    logo: string,
    porcentaje: number,
    persona: Persona
  ) {
    this.idHab = idHab;
    this.habilidad = habilidad;
    this.logo = logo;
    this.porcentaje = porcentaje;
    this.persona = persona;
  }
}
