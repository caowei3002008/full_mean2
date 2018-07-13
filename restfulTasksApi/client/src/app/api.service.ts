import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  product = [{name: "Postman test", detail:"Postman tested", id:0},
    {name: "Postman2 test", detail:"Postman2 tested", id:1},
    {name: "Postman3 test", detail:"Postman3 tested", id:2},
    {name: "Postman4 test", detail:"Postman4 tested", id:3},
    {name: "Postman5 test", detail:"Postman5 tested", id:4}
  ];
  constructor() { }

  getProducts(){
    return this.product;
  }
}
