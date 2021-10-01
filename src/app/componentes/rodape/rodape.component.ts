import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss'],
})
export class RodapeComponent implements OnInit {
  user$ = this.usuarioService.retornaUsuario();
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
