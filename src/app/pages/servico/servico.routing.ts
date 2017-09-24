import { Routes, RouterModule } from '@angular/router';

import { Servico } from './servico.component';
import { Listar } from './components/listar/listar.component';
import { Cadastro } from './components/cadastro/cadastro.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Servico,
    children: [
      { path: 'listar', component: Listar },
      { path: 'cadastro', component: Cadastro },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
