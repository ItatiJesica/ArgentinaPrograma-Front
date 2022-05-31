import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../Modelo/Experiencia';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  url: string= 'https://portfolio-arg-prog.herokuapp.com/api/experiencia';
  constructor(private httpClient: HttpClient) {}

  //listar
  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.url+'/listar');
  }


  //crear-guardar
  public save(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.url + '/crear', experiencia);
  }

  //seleccionar un elemento
  public detail(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.url+'/' +id);
  }
  //editar
  public update(experiencia: Experiencia): Observable<Experiencia> {
    return this.httpClient.put<Experiencia>(this.url + '/editar/' + experiencia.idExp, experiencia);
  }

  //eliminar
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/eliminar/' + id);
  }

  /*
  getExperiencias():Observable<any>
  {
   return this.http.get(this.url+"/listar/"+ 1);
 }

 obtenerExperienciaPorId(id: string):Observable<any>
  {
    return this.http.get(this.url+'/'+1+'/listar'+id);
  }

  saveExperiencia(experiencia: Experiencia):Observable<any>
  {
    return this.http.post(this.url, experiencia);
  }

  editExperiencia(id: string, experiencia: Experiencia):Observable<any>
  {
    return this.http.put(this.url+'/'+id, experiencia);
  }
  deleteExperiencia(id: string):Observable<any>
  {
    return this.http.delete(this.url+'/'+id);
  }
  */
}
