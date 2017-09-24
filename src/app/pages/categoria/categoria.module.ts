import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './categoria.routing';
import { Categoria } from './categoria.component';
import { ImageUploadModule } from 'angular2-image-upload';

import { Cadastro } from './components/cadastro/cadastro.component';
import { CadastroService } from './components/cadastro/cadastro.service';

import { Listar } from './components/listar/listar.component';
import { ListarService } from './components/listar/listar.service';

import { Detalhe} from './components/detalhe/detalhe.component';
import { DetalheService } from './components/detalhe/detalhe.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    ImageUploadModule.forRoot(),
    routing,    
  ],
  declarations: [
    Categoria,
    Cadastro,
    Listar,
    Detalhe,    
  ], 
  providers: [
    CadastroService,
    ListarService,
    DetalheService,
  ]
})
export class CategoriaModule { }
