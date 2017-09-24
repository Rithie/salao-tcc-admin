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

  categoria: any;
  id: string;

  form: FormGroup;

  nome: AbstractControl;

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


  constructor(private modalService: NgbModal,private router: ActivatedRoute, private service: DetalheService, private fb: FormBuilder) {
    this.id = this.router.snapshot.params.id;
    this.service.getCategoria(this.id).then((res: any) => {
      let resposta = JSON.parse(res._body);
      this.categoria = resposta;
      this.form.controls['nome'].setValue(this.categoria.nome);
      this.profile.picture ='http://localhost:3000/imagem/categorias/'+ this.categoria.imagem;
        console.log(this.categoria);
    
    }).catch((error) => console.log(error));
    
    this.form = fb.group({
      'nome': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });
    
    this.nome = this.form.controls['nome'];


  }

  getImage(data) {
    // console.log(data.srcElement.result);
    if (data) {
      this.imagem = data.srcElement.result;      
    } else {
      this.imagem = "";
    }
  }


  onSubmit(): void {
    if (this.form.valid) {
      let data = {
        "categoria": {
          "nome": this.nome.value,
          "imagem": this.imagem
        }
      };
      console.log(data);
      this.service.editar(data, this.id).then((res: any) => {
        console.log(res);
      }).catch((error) => console.log(error));
    }
  
  }
  




}
