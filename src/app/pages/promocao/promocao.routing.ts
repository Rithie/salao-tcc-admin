import { Routes, RouterModule } from '@angular/router';

import { Promocao } from './promocao.component';
import { Cadastro } from './components/cadastro/cadastro.component';
import { Listar } from './components/listar/listar.component';
import { Detalhe } from './components/detalhe/detalhe.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Promocao,
    children: [
      { path: 'detalhe/:id', component: Detalhe },
      { path: 'cadastro', component: Cadastro },
      { path: 'listar', component: Listar },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
