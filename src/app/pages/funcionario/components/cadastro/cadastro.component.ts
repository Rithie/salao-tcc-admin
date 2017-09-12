import { Component } from '@angular/core';
import { TreeModel } from 'ng2-tree';
import { NgUploaderOptions } from 'ngx-uploader';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../../../theme/validators';

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
  sexo: AbstractControl;
  // [(ngModel)] = "servico"
  primeiroHorario1: AbstractControl;
  primeiroHorario2: AbstractControl;
  segundoHorario1: AbstractControl;
  segundoHorario2: AbstractControl;

  login: AbstractControl;
  password: AbstractControl;
  repeatPassword: AbstractControl;
  passwords: FormGroup;

  submitted: boolean = false;

  test: string;
  servico: string;
  defaultPicture = 'assets/img/theme/no-photo.png';
  profile: any = {
    picture: 'assets/img/app/profile/Nasta.png',
  };

  uploaderOptions: NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  fileUploaderOptions: NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  checkboxModel = [
    {
    name: 'Segunda',
    checked: false,
    class: 'col-md-2',
    },
    {
    name: 'Terça',
    checked: false,
    class: 'col-md-2',
    },
    {
    name: 'Quarta',
    checked: false,
    class: 'col-md-2',
    },
    {
    name: 'Quinta',
    checked: false,
    class: 'col-md-2',
    },
    {
    name: 'Sexta',
    checked: false,
    class: 'col-md-2',
    },
    {
    name: 'Sábado',
    checked: false,
    class: 'col-md-2',
    },
    {
    name: 'Domingo',
    checked: false,
    class: 'col-md-2',
    },
  ];

  checkboxPropertiesMapping = {
    model: 'checked',
    value: 'name',
    label: 'name',
    baCheckboxClass: 'class',
  };

  vaPara() {
    console.log(this.sexo.value);
    this.test = this.servico;
  }
  
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'nome': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'cpf': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(11)])],
      'rg': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'telefone': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(11)])],
      'sexo': ['', Validators.compose([Validators.required])],
      'primeiroHorario1': ['', Validators.compose([Validators.required])],
      'primeiroHorario2': ['', Validators.compose([Validators.required])],
      'segundoHorario1': ['', Validators.compose([Validators.required])],
      'segundoHorario2': ['', Validators.compose([Validators.required])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      }, { validator: EqualPasswordsValidator.validate('password', 'repeatPassword') }),
    });

    this.nome = this.form.controls['nome'];
    this.cpf = this.form.controls['cpf'];
    this.rg = this.form.controls['rg'];
    this.email = this.form.controls['email'];
    this.telefone = this.form.controls['telefone'];
    this.passwords = <FormGroup>this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
    this.sexo = this.form.controls['sexo'];
  }

  onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }


}
