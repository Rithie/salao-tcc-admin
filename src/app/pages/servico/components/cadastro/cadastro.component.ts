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
  valor: AbstractControl;
  descricao: AbstractControl;
  tempo: AbstractControl;

  submitted: boolean = false;

  test: string;
  servico: string;
  defaultPicture = 'assets/img/theme/no-photo.png';
  profile: any = {
    picture: 'assets/img/app/profile/Nasta.png',
  };

  vaPara() {
    
    this.test = this.servico;
  }
  
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'nome': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'tempo': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(11)])],
      'valor': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'descricao': ['', Validators.compose([Validators.required, EmailValidator.validate])],
    });

    this.nome = this.form.controls['nome'];
    this.tempo = this.form.controls['tempo'];
    this.descricao = this.form.controls['descricao'];
    this.valor = this.form.controls['valor'];
  }

  onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }


}
