import { Component } from '@angular/core';
import { ListarService } from './listar.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'listar',
  templateUrl: './listar.html',
})

export class Listar {

  servicos: Array<{}>;
  constructor(private router: Router,private service: ListarService) {
    this.service.getServicos().then((res: any) => {
      console.log(res);
      let resposta = JSON.parse(res._body);
      this.servicos = resposta;
      console.log(resposta);
    }).catch((error) => console.log(error));
    
  }
  vaPara(servico) {
    console.log(servico.id);
    
    this.router.navigateByUrl('/pages/servico/detalhe/' + servico.id);
  }


}
