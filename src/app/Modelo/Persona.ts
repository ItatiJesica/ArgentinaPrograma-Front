export class Persona {
  id: number;
  contacto: string;
  descripcion: string;
  foto: string;
  nombre: string;
  titulo: string;
  ubicacion: string;

  constructor(
    id: number,
    contacto: string,
    descripcion: string,
    foto: string,
    nombre: string,
    titulo: string,
    ubicacion: string
  ) {
    this.id = id;
    this.contacto = contacto;
    this.descripcion = descripcion;
    this.foto = foto;
    this.nombre = nombre;
    this.titulo = titulo;
    this.ubicacion = ubicacion;
  }
}
