import { Component } from '@angular/core';
import { DetalheService } from './detalhe.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../../../theme/validators';
import { NgUploaderOptions, UploadedFile } from 'ngx-uploader';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'detalhe',
  templateUrl: './detalhe.html',
})

export class Detalhe {
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

  vaPara() {

    this.test = this.servico;
  }

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

  onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      let data = {
        "servico": {
          "nome": this.nome.value,
          "tempo": this.tempo.value,
          "descricao": this.descricao.value,
          "valor": this.valor.value,
          "categoriumId": this.categoria
        }
      }
      console.log(JSON.stringify(data));
    }
  }





}
