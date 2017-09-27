import { Routes, RouterModule } from '@angular/router';

import { Funcionario } from './funcionario.component';
import { Listar } from './components/listar/listar.component';
import { Cadastro } from './components/cadastro/cadastro.component';
import { Detalhe } from './components/detalhe/detalhe.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Funcionario,
    children: [
      { path: 'detalhe/:id', component: Detalhe },
      { path: 'listar', component: Listar },
      { path: 'cadastro', component: Cadastro },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
