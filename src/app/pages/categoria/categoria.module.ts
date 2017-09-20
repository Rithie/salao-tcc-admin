import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { TreeModule } from 'ng2-tree';

import { routing } from './categoria.routing';
import { Categoria } from './categoria.component';
import { Cadastro } from './components/cadastro/cadastro.component';
import { ImageUploadModule } from 'angular2-image-upload';
import { CadastroService } from './components/cadastro/cadastro.service';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    TreeModule,
    ImageUploadModule.forRoot(),
    routing,
  ],
  declarations: [
    Categoria,
    Cadastro,
  ],
  providers: [
    CadastroService
  ]
})
export class CategoriaModule { }
