import { Component } from '@angular/core';
import { ListarService } from './listar.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'listar',
  templateUrl: './listar.html',
})

export class Listar {

  promocoes: Array<{}>;
  constructor(private router: Router,private service: ListarService) {
    this.service.getPromocoes().then((res: any) => {
      let resposta = JSON.parse(res._body);
      this.promocoes = resposta;
      console.log(resposta);
    }).catch((error) => console.log(error));
    
  }
  vaPara(promocao) {
    console.log(promocao.id);
    
    this.router.navigateByUrl('/pages/promocao/detalhe/' + promocao.id);
  }


}
