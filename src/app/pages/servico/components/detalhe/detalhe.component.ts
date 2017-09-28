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
  categoria:any;

  submitted: boolean = false;
  

  servico: string;
  id: any;

  categorias: Array<{}>;

  

  vaPara() {

    
  }

  constructor(private router: ActivatedRoute, private service: DetalheService, fb: FormBuilder) {
    this.id = this.router.snapshot.params.id;
    this.service.getServico(this.id).then((res: any) => {
      let resposta = JSON.parse(res._body);
      console.log(resposta);
      this.form.controls['nome'].setValue(resposta.nome);
      this.form.controls['tempo'].setValue(resposta.tempo);
      this.form.controls['descricao'].setValue(resposta.descricao);
      this.form.controls['valor'].setValue(resposta.valor);
      this.categoria = resposta.categoriaId;
    }).catch((error) => console.log(error));

    this.service.getCategorias().then((res: any) => {
      let resposta = JSON.parse(res._body);
      this.categorias = resposta;
      // this.categoria = resposta[0].id;
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

  editar(): void {
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
      this.service.editar(data, this.id).then((res: any) => {
        console.log(res);
      }).catch((error) => console.log(error));
    }
  }





}
