import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../Modelo/JwtDto';
import { LoginUsuario } from '../Modelo/login-usuario';
import { NuevoUsuario } from '../Modelo/nuevo-usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

 url = 'https://portfolio-arg-prog.herokuapp.com/auth/';

 constructor(private httpClient: HttpClient) { }

 public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
   return this.httpClient.post<any>(this.url + 'nuevo', nuevoUsuario);
 }

 public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
   return this.httpClient.post<JwtDto>(this.url + 'login', loginUsuario);
 }
}
