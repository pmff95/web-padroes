import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ListaMainComponent } from './lista-main/lista-main.component';
import { AnimaisComponent } from './animais/animais.component';
import { CartaoModule } from '../componentes/cartao/cartao.module';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';

@NgModule({
  declarations: [
    ListaMainComponent,
    AnimaisComponent,
    GradeFotosAnimaisComponent,
  ],
  imports: [CommonModule, MainRoutingModule, CartaoModule],
})
export class MainModule {}
