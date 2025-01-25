import { Component } from '@angular/core';
import {Professor} from "../../shared/modelo/professor";
import {PROFESSORES} from "../../shared/modelo/PROFESSORES";

@Component({
  selector: 'app-cadastro-professor',
  standalone: false,
  
  templateUrl: './cadastro-professor.component.html',
  styleUrl: './cadastro-professor.component.css'
})
export class CadastroProfessorComponent {

  PROFESSORES = PROFESSORES;
  professorDeCadastro: Professor;

  constructor() {
    this.professorDeCadastro = new Professor();
  }

  cadastrar() {
    this.PROFESSORES.push(this.professorDeCadastro);
    this.professorDeCadastro = new Professor();
  }
}
