import { Persona } from './Persona';

export class Experiencia {
  idExp: number;
  empresa: string;
  fin: string;
  inicio: string;
  logo: string;
  puesto: string;
  tipo: string;
  ubicacion: string;
  persona: Persona;

  constructor(
    idExp: number,
    empresa: string,
    fin: string,
    inicio: string,
    logo: string,
    puesto: string,
    tipo: string,
    ubicacion: string,
    persona: Persona,
  ) {
    this.idExp = idExp;
    this.empresa = empresa;
    this.fin = fin;
    this.inicio = inicio;
    this.logo = logo;
    this.puesto = puesto;
    this.tipo = tipo;
    this.ubicacion= ubicacion;
    this.persona= persona;
  }
}
