import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ListaMainComponent } from './lista-main/lista-main.component';
import { AnimaisComponent } from './animais/animais.component';


@NgModule({
  declarations: [
    ListaMainComponent,
    AnimaisComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
