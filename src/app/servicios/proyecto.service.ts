import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Proyecto} from '../Modelo/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url='https://portfolio-arg-prog.herokuapp.com/api/proyecto';

  constructor(private httpClient:HttpClient) { }
  //listar
  public lista(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.url+'/listar');
  }

  //crear-guardar
  public save(habilidad: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.url + '/crear', habilidad);
  }

  //seleccionar un elemento
  public detail(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.url+'/' +id);
  }
  //editar
  public update(proyecto: Proyecto): Observable<Proyecto> {
    return this.httpClient.put<Proyecto>(this.url + '/editar/' + proyecto.idPro, proyecto);
  }

  //eliminar
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/eliminar/' + id);
  }
}
