import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { TreeModule } from 'ng2-tree';

import { routing } from './servico.routing';
import { Servico } from './servico.component';
import { TreeView } from './components/treeView/treeView.component';

import { Cadastro } from './components/cadastro/cadastro.component';
import { CadastroService } from './components/cadastro/cadastro.service';

import { Listar } from './components/listar/listar.component';
import { ListarService } from './components/listar/listar.service';

import { Detalhe } from './components/detalhe/detalhe.component';
import { DetalheService } from './components/detalhe/detalhe.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    TreeModule,
    routing,
  ],
  declarations: [
    Servico,
    TreeView,
    Cadastro,
    Listar,
    Detalhe,

  ],
  providers: [
    CadastroService,
    ListarService,
    Detalhe
  ]
})
export class ServicoModule { }
