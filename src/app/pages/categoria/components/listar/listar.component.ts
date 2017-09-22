import { Component } from '@angular/core';
import { ListarService } from './listar.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'listar',
  templateUrl: './listar.html',
})

export class Listar {

  categorias: Array<{}>;
  constructor(private router: Router,private service: ListarService) {
    this.service.getCategorias().then((res: any) => {
      let resposta = JSON.parse(res._body);
      this.categorias = resposta;
      console.log(resposta);
    }).catch((error) => console.log(error));
    
  }
  vaPara(categoria) {
    console.log(categoria.id);
    
    this.router.navigateByUrl('/pages/categoria/detalhe/' + categoria.id);
  }


}
