import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemProfessorComponent } from './listagem-professor/listagem-professor.component';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { ListagemCadastroProfessorComponent } from './listagem-cadastro-professor/listagem-cadastro-professor.component';

@NgModule({
  declarations: [
    ListagemProfessorComponent,
    CadastroProfessorComponent,
    ListagemCadastroProfessorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfessorModule { }
