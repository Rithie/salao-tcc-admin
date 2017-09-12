import { Routes, RouterModule } from '@angular/router';

import { Funcionario } from './funcionario.component';
import { TreeView } from './components/treeView/treeView.component';
import { Cadastro } from './components/cadastro/cadastro.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Funcionario,
    children: [
      { path: 'treeview', component: TreeView },
      { path: 'cadastro', component: Cadastro },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
