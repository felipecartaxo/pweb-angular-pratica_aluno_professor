import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListagemComponent} from "./usuario/listagem/listagem.component";
import {ManutencaoComponent} from "./usuario/manutencao/manutencao.component";
import {ListagemCadastroComponent} from "./usuario/listagem-cadastro/listagem-cadastro.component";
import { ListagemProfessorComponent } from './professor/listagem-professor/listagem-professor.component';
import { CadastroProfessorComponent } from './professor/cadastro-professor/cadastro-professor.component';
import { ListagemCadastroProfessorComponent } from './professor/listagem-cadastro-professor/listagem-cadastro-professor.component';

const routes: Routes = [
  {
    path: 'listagem-alunos',
    component: ListagemComponent
  },
  {
    path: 'cadastro-aluno',
    component: ManutencaoComponent
  },
  {
    path: 'listagem-cadastro-alunos',
    component: ListagemCadastroComponent
  },

  // Configurando botão para redirecionar para os componentes que realizarão o CRUD de professores
  {
    path: 'listagem-professor',
    component: ListagemProfessorComponent
  },
  {
    path: 'cadastro-professor',
    component: CadastroProfessorComponent
  },
  {
    path: 'listagem-cadastro-professor',
    component: ListagemCadastroProfessorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
