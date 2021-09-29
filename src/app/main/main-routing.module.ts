import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMainComponent } from './lista-main/lista-main.component';

const routes: Routes = [
  {
    path: '',
    component: ListaMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
