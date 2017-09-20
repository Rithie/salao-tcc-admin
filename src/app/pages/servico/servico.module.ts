import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { TreeModule } from 'ng2-tree';

import { routing } from './servico.routing';
import { Servico } from './servico.component';
import { TreeView } from './components/treeView/treeView.component';
import { Cadastro } from './components/cadastro/cadastro.component';
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
  ],
})
export class ServicoModule { }
