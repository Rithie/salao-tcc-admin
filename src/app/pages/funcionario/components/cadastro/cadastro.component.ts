import { Component } from '@angular/core';
import { TreeModel } from 'ng2-tree';
import { NgUploaderOptions, UploadedFile } from 'ngx-uploader';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../../../theme/validators';
import {CadastroService } from './cadastro.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.html',
})

export class Cadastro {

  form: FormGroup;

  nome: AbstractControl;
  cpf: AbstractControl;
  rg: AbstractControl;
  email: AbstractControl;
  telefone: AbstractControl;
  sexo: string;
  imagem: string;

  servico: AbstractControl;


  horarioInicial: AbstractControl;
  horarioFinal: AbstractControl;
  servicos: Array<{}>;

  defaultPicture = 'assets/img/theme/no-photo.png';
  profile: any = {
    picture: '',
  };

  uploaderOptions: NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  fileUploaderOptions: NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  submitted: boolean = false;

  horario = [
    {
    name: 'Segunda',
    checked: false,
    class: 'col-md-2',
    atributo:'segunda',
    },
    {
    name: 'Terça',
    checked: false,
    class: 'col-md-2',
    atributo: 'terca',
    },
    {
    name: 'Quarta',
    checked: false,
    class: 'col-md-2',
    atributo: 'quarta',
    },
    {
    name: 'Quinta',
    checked: false,
    class: 'col-md-2',
    atributo: 'quinta',
    },
    {
    name: 'Sexta',
    checked: false,
    class: 'col-md-2',
    atributo: 'sexta',
    },
    {
    name: 'Sábado',
    checked: false,
    class: 'col-md-2',
    atributo: 'sabado',
    },
    {
    name: 'Domingo',
    checked: false,
    class: 'col-md-2',
    atributo: 'domingo',
    },
  ];

  checkboxPropertiesMapping = {
    model: 'checked',
    value: 'name',
    label: 'name',
    baCheckboxClass: 'class',
  };

  
  constructor(fb: FormBuilder, private service : CadastroService) {
    this.form = fb.group({
      'nome': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'cpf': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(11)])],
      'rg': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'telefone': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(11)])],
      'horarioInicial': ['', Validators.compose([Validators.required])],
      'horarioFinal': ['', Validators.compose([Validators.required])],
    });

    this.nome = this.form.controls['nome'];
    this.cpf = this.form.controls['cpf'];
    this.rg = this.form.controls['rg'];
    this.email = this.form.controls['email'];
    this.telefone = this.form.controls['telefone'];
    this.horarioInicial = this.form.controls['horarioInicial'];
    this.horarioFinal = this.form.controls['horarioFinal'];

    this.service.getServicos().then((servicos:any) => {
      let resultado = JSON.parse(servicos._body);
      this.servicos = resultado;
    }).catch((error) => console.log(error));

  }
  
  getImage(data) {
    // console.log(data.srcElement.result);
    this.imagem = data.srcElement.result;
  }


  onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      let data = {
        "funcionario": {
          "nome": this.nome.value,
          "cpf": this.cpf.value,
          "rg": this.rg.value,
          "email": this.email.value,
          "telefone": this.telefone.value,
          "sexo": this.sexo,
          "imagem": this.imagem,
          "servicos": this.servico,
          "horarios": this.horario,
          "horarioInicial": this.horarioInicial.value ,
          "horarioFinal": this.horarioFinal.value,
        }
      };
      console.log(data);
      this.service.cadastro(data).then((res:any) => {
        console.log(res);
      }).catch((error) => console.log(error));
    }
  }


}
