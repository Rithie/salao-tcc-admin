import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../../../theme/validators';
import { CadastroService } from './cadastro.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NgUploaderOptions, UploadedFile } from 'ngx-uploader';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.html',
})

export class Cadastro {

  form: FormGroup;

  nome: AbstractControl;
  valor: AbstractControl;
  descricao: AbstractControl;
  imagem: string;
  servicos: Array<{}>;
  servico: any;

  mensagem: string = "OIE";

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile: any = {
    picture: ''
  };
  public uploaderOptions: NgUploaderOptions = {
    url: '',
    calculateSpeed: true
  };

  constructor(private service : CadastroService ,private route: ActivatedRoute, private fb: FormBuilder) {
    this.service.getServicos().then((res: any) => {
      let resposta = JSON.parse(res._body);
      this.servicos = resposta;
      this.servico = resposta[0].id;
      console.log(resposta);

    }).catch((error) => console.log(error));
    

    
    this.form = fb.group({
      'nome': ['', Validators.compose([Validators.required, Validators.minLength(4)], )],
      'valor': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'descricao': ['', Validators.compose([Validators.required])],
      // 'tempo': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(11)])],
      
    });

    this.nome = this.form.controls['nome'];
    this.valor = this.form.controls['valor'];
    this.descricao = this.form.controls['descricao'];
  }

  getImage(data) {
    // console.log(data.srcElement.result);
    this.imagem = data.srcElement.result;
  }

  onSubmit(): void {
    if (this.form.valid) {
      let data = {
        "promocao": {
          "nome": this.nome.value,
          "valorPromocional": this.valor.value,
          "descricao": this.descricao.value,
          "servicoId": this.servico,
          "imagem": this.imagem
        }
      };
      this.service.cadastro(data).then((res: any) => {
        console.log(res);
      }).catch((error) => console.log(error));
      // your code goes here
      // console.log(values);
    }
  }
}
