import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ListarService {
    url: string;
    constructor(private http: Http) {  
        this.url = "http://localhost:3000/v1/app/servico";
    }
    private contentHeader: Headers = new Headers({ "Content-Type": "application/json" });

    getServicos() {
        return new Promise((resolve, reject) => {
            this.http.get(this.url)
                .map(res => res)
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

 }