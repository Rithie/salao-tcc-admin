import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class CadastroService {
    url: string;
    urlServicos: string;
    constructor(private http: Http) {  
        this.url = "http://localhost:3000/v1/app/funcionario";
        this.urlServicos = "http://localhost:3000/v1/app/servico";
    }
    private contentHeader: Headers = new Headers({ "Content-Type": "application/json" });

    cadastro(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url, JSON.stringify(data), { headers: this.contentHeader })
                .map(res => res)
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }
    
    getServicos() {
        return new Promise((resolve, reject) => {
            this.http.get(this.urlServicos)
                .map(res => res)
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

 }