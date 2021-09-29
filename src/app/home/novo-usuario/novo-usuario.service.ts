import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private http: HttpClient) {}

  cadastrarNovoUsario(novoUsuario: NovoUsuario) {
    return this.http.post('htt://localhost:3000/user/signup', novoUsuario);
  }

  verificarUsuarioExistente(nomeUsuario: string) {
    return this.http.get(`http://localhost:3000/user/exists/${nomeUsuario}`);
  }
}
