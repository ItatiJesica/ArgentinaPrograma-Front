import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../Modelo/Habilidad';

@Injectable({
  providedIn: 'root',
})
export class HabilidadService {
  onCreate(habilidad: Habilidad) {
    throw new Error('Method not implemented.');
  }
  url = 'https://portfolio-arg-prog.herokuapp.com/api/habilidad';

  constructor(private httpClient: HttpClient) {}

  //listar
  public lista(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.url+'/listar');
  }

  //crear-guardar
  public save(habilidad: Habilidad): Observable<any> {
    return this.httpClient.post<any>(this.url + '/crear', habilidad);
  }

  //seleccionar un elemento
  public detail(id: number): Observable<Habilidad> {
    return this.httpClient.get<Habilidad>(this.url+'/' +id);
  }
  //editar
  public update(habilidad: Habilidad): Observable<Habilidad> {
    return this.httpClient.put<Habilidad>(this.url + '/editar/' + habilidad.idHab, habilidad);
  }

  //eliminar
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/eliminar/' + id);
  }
}
