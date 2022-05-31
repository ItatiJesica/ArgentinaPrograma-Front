import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../Modelo/Habilidad';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  url = 'https://portfolio-arg-prog.herokuapp.com/api/persona';

  constructor(private httpClient: HttpClient) {}

  //listar
  public lista(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.url+'/listar');
  }

  //seleccionar un elemento
  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.url+'/' +id);
  }

  //crear-guardar
  public save(persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.url +'/guardar', persona);
  }

//editar
  public update(persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.url + '/editar/'+persona.id ,persona);
  }

}

