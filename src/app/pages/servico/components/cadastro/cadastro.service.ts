import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class CadastroService {
    constructor(http: Http) {        
    }
    private contentHeader: Headers = new Headers({ "Content-Type": "application/json" });

    // cadastro(lista: Lista) {
    //     let url: string = Url.URL + this.endPointCadastro;
    //     return new Promise((resolve, reject) => {
    //         this.http.post(url, JSON.stringify(lista), { headers: this.contentHeader })
    //             .map(res => res)
    //             .subscribe(data => {
    //                 resolve(data);
    //             }, error => {
    //                 reject(error);
    //             });
    //     });
    // }

 }