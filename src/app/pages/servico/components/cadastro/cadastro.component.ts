import { Component } from '@angular/core';
import { TreeModel } from 'ng2-tree';
import { NgUploaderOptions } from 'ngx-uploader';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../../../theme/validators';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.html',
})

export class Cadastro {

  form: FormGroup;

  nome: AbstractControl;
  valor: AbstractControl;
  descricao: AbstractControl;
  tempo: AbstractControl;

  submitted: boolean = false;
  categoria: string;

  test: string;
  servico: string;
  defaultPicture = 'assets/img/theme/no-photo.png';
  profile: any = {
    picture: 'assets/img/app/profile/Nasta.png',
  };
  categorias: Array<{}>;

  
  constructor(private service: CadastroService, fb: FormBuilder) {
    this.service.getCategorias().then((res: any) => {
      let resposta = JSON.parse(res._body);
      this.categorias = resposta;
      this.categoria = resposta[0].id;
      console.log(resposta);

    }).catch((error) => console.log(error));

    this.form = fb.group({
      'nome': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'tempo': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(11)])],
      'valor': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'descricao': ['', Validators.compose([Validators.required])],
    });

    this.nome = this.form.controls['nome'];
    this.tempo = this.form.controls['tempo'];
    this.descricao = this.form.controls['descricao'];
    this.valor = this.form.controls['valor'];
  }

  cadastrar(): void {
    this.submitted = true;
    if (this.form.valid) {
      let data = {
        "servico": {
          "nome": this.nome.value,
          "tempo": this.tempo.value,
          "descricao": this.descricao.value,
          "valor": this.valor.value,
          "categoriaId": this.categoria
        }
      }
      this.service.cadastro(data).then((res: any) => {
        console.log(res);
      }).catch((error) => console.log(error));
    }
  }


}
