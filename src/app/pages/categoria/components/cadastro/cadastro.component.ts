import { Component, NgZone, Inject } from '@angular/core';
import { TreeModel } from 'ng2-tree';
import { NgUploaderOptions, UploadedFile } from 'ngx-uploader';
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
  sizeLimit: number = 10000000; // 1MB
  test: string;
  servico: string;
  errorMessage: string;
  defaultPicture = 'assets/img/theme/no-photo.png';
  profile: any = {
    // picture: 'assets/img/app/profile/Nasta.png',
  };

  // uploaderOptions: NgUploaderOptions = {
  //   // url: 'http://website.com/upload'
  //   url: '',
  // };

  // handleUpload($event) {
  //   console.log($event);
  //   console.log("entrou aqui upload");
  // }
  options: NgUploaderOptions;
  response: any;
  vaPara() {
    
    // this.test = this.servico;
    console.log(this.profile.picture);
  }
  aqui(data: any) {
    console.log(data);
  }
  beforeUpload(uploadingFile: UploadedFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      this.errorMessage = 'File is too large!';
    }
    console.log(uploadingFile);
  }

  constructor(private fb : FormBuilder,@Inject(NgZone) private zone: NgZone) {
    this.options = new NgUploaderOptions({
      url: 'http://api.ngx-uploader.com/upload',
      autoUpload: false,
      calculateSpeed: true,      
    });

    
    this.form = fb.group({
      'nome': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      // 'tempo': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(11)])],
      
    });

    this.nome = this.form.controls['nome'];
    // this.tempo = this.form.controls['tempo'];
  }

  onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }

  handleUpload(data: any) {
    setTimeout(() => {
      this.zone.run(() => {
        this.response = data;
        if (data && data.response) {
          this.response = JSON.parse(data.response);
        }
      });
    });
  }



}
