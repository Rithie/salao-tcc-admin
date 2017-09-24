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

  promocao: any;
  id: string;

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



  constructor(private router: ActivatedRoute, private service: DetalheService, private fb: FormBuilder) {
    this.id = this.router.snapshot.params.id;
    this.service.getPromocao(this.id).then((res: any) => {
      let resposta = JSON.parse(res._body);
      console.log(resposta);
      this.promocao = resposta;
      this.form.controls['nome'].setValue(this.promocao.nome);
      this.form.controls['valor'].setValue(this.promocao.valorPromocional);
      this.form.controls['descricao'].setValue(this.promocao.descricao);
      this.servico = this.promocao.servicoId;
      this.profile.picture = 'http://localhost:3000/imagem/promocoes/' + this.promocao.imagem;     

    }).catch((error) => console.log(error));

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
    });

    this.nome = this.form.controls['nome'];
    this.valor = this.form.controls['valor'];
    this.descricao = this.form.controls['descricao'];


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
        "promocao": {
          "nome": this.nome.value,
          "valorPromocional": this.valor.value,
          "descricao": this.descricao.value,
          "servicoId": this.servico,
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
