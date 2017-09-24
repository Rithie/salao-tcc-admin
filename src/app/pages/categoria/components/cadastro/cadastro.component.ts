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

  mensagem: string = "OIE";

  imagem: string;
  sub: any;
  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile: any = {
    picture: ''
  };
  public uploaderOptions: NgUploaderOptions = {
    url: '',
    calculateSpeed: true
  };
  
  ngOnInit() {
    // console.log(this.route.snapshot.params['id']);
  }

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private service: CadastroService) {
    

    
    this.form = fb.group({
      'nome': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      // 'tempo': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(11)])],
      
    });

    this.nome = this.form.controls['nome'];
  }

  getImage(data) {
    // console.log(data.srcElement.result);
    this.imagem = data.srcElement.result;
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
}
