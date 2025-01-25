import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemProfessorComponent } from './listagem-professor/listagem-professor.component';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { ListagemCadastroProfessorComponent } from './listagem-cadastro-professor/listagem-cadastro-professor.component';
import { FormsModule } from "@angular/forms";
import { MatButton, MatButtonModule } from "@angular/material/button";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { MatInput, MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";

@NgModule({
  declarations: [
    ListagemProfessorComponent,
    CadastroProfessorComponent,
    ListagemCadastroProfessorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports: [
      ListagemProfessorComponent,
      CadastroProfessorComponent
  ]
})
export class ProfessorModule { }
