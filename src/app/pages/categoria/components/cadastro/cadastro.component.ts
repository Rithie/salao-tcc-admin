import { Component } from '@angular/core';
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

  mensagem: string = "OIE";

  imagem: string;

  constructor(private fb : FormBuilder,private service : CadastroService) {

    
    this.form = fb.group({
      'nome': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      // 'tempo': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(11)])],
      
    });

    this.nome = this.form.controls['nome'];
  }

  onSubmit(): void {
    if (this.form.valid) {
      let data = {
        "categoria": {
          "nome": this.nome.value,
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

  imageFinishedUploading(file: any) {
    this.imagem = file.src;
    // console.log(JSON.stringify(file.serverResponse));
  }

  imageRemoved(file: any) {
    this.imagem = "";
    // do some stuff with the removed file.
  }

  uploadStateChange(state: boolean) {
    console.log(JSON.stringify(state));
  }


}
