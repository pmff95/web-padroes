import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/autenticacao/token.service';
import { environment } from 'src/environments/environment';
import { Animais } from './animais';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(private http: HttpClient, private token: TokenService) {}

  listdoUsuario(nomeDoUsuario: string): Observable<Animais> {
    const token = this.token.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`, {
      headers,
    });
  }
}
