import { Component } from '@angular/core';
import { DetalheService } from './detalhe.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../../../theme/validators';


@Component({
  selector: 'detalhe',
  templateUrl: './detalhe.html',
})

export class Detalhe {

  categoria: any;
  id: string;

  form: FormGroup;

  nome: AbstractControl;

  mensagem: string = "OIE";

  imagem: string;
  sub: any;

  // ngOnInit() {
  //   this.id = this.router.snapshot.params.id;
//    this.service.getCategoria(this.id).then((res: any) => {
//   let resposta = JSON.parse(res._body);
//   this.categoria = resposta;
//   this.nome.setValue = this.categoria.nome;
// }).catch((error) => console.log(error));
//   }

  constructor(private router: ActivatedRoute, private service: DetalheService, private fb: FormBuilder) {
    this.id = this.router.snapshot.params.id;
    this.service.getCategoria(this.id).then((res: any) => {
      let resposta = JSON.parse(res._body);
      this.categoria = resposta;
      this.form.controls['nome'].setValue(this.categoria.nome);
        console.log(this.categoria);
    
    }).catch((error) => console.log(error));
    
    this.form = fb.group({
      'nome': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
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
      // this.service.cadastro(data).then((res: any) => {
      //   console.log(res);
      // }).catch((error) => console.log(error));
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
