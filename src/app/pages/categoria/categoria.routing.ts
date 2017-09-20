import { Routes, RouterModule } from '@angular/router';

import { Categoria } from './categoria.component';
import { Cadastro } from './components/cadastro/cadastro.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Categoria,
    children: [
      { path: 'cadastro', component: Cadastro },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
