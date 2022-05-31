import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../Modelo/Educacion';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  url = 'https://portfolio-arg-prog.herokuapp.com/api/educacion';
  constructor(private httpClient: HttpClient) {}
  //listar
  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.url+'/listar');
  }


  //crear-guardar
  public save(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.url + '/crear', educacion);
  }

  //seleccionar un elemento
  public detail(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.url+'/' +id);
  }
  //editar
  public update(educacion: Educacion): Observable<Educacion> {
    return this.httpClient.put<Educacion>(this.url + '/editar/' + educacion.idEd, educacion);
  }

  //eliminar
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/eliminar/' + id);
  }
  /*

  getEducacion():Observable<any>
  {
   return this.http.get(this.url+"/listar/"+ 1);
 }


 obtenerEducacionPorId(id: string):Observable<any>
  {
    return this.http.get(this.url+'/'+1+'/listar'+id);
  }

  saveEducacion(educacion: Educacion):Observable<any>
  {
    return this.http.post(this.url, educacion);
  }

  editEducacion(id: string, educacion: Educacion):Observable<any>
  {
    return this.http.put(this.url+'/'+id, educacion);
  }
  deleteEducacion(id: string):Observable<any>
  {
    return this.http.delete(this.url+'/'+id);
  }
  */
}
