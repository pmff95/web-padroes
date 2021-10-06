import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Animais } from '../animais/animais';
import { AnimaisService } from '../animais/animais.service';

@Component({
  selector: 'app-lista-main',
  templateUrl: './lista-main.component.html',
  styleUrls: ['./lista-main.component.scss'],
})
export class ListaMainComponent implements OnInit {
  animais$!: Observable<Animais>;

  constructor(
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService
  ) {}

  ngOnInit(): void {
    this.searchAnimais();
  }

  searchAnimais() {
    this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animaisService.listdoUsuario(userName);
      })
    );

    // this.usuarioService.retornaUsuario().subscribe((usuario) => {
    //   const userName = usuario.name ?? '';
    //   this.animaisService.listdoUsuario(userName).subscribe((animais) => {
    //     this.animais = animais;
    //   });
    // });
  }
}
