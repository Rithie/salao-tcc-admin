import { Component } from '@angular/core';
import { ListarService } from './listar.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'listar',
  templateUrl: './listar.html',
})

export class Listar {


  funcionarios: Array<{}>;
  constructor(private router: Router, private service: ListarService) {
    this.service.getFuncionarios().then((res: any) => {
      let resposta = JSON.parse(res._body);
      this.funcionarios = resposta;
      console.log(resposta);
    }).catch((error) => console.log(error));

  }
  vaPara(funcionario) {
    console.log(funcionario.id);

    this.router.navigateByUrl('/pages/funcionario/detalhe/' + funcionario.id);
  }


}
