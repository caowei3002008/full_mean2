import { Component } from '@angular/core';
import {ApiService} from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  product = [{name: "Postman test", detail:"Postman tested", id:0},
    {name: "Postman2 test", detail:"Postman2 tested", id:1},
    {name: "Postman3 test", detail:"Postman3 tested", id:2},
    {name: "Postman4 test", detail:"Postman4 tested", id:3},
    {name: "Postman5 test", detail:"Postman5 tested", id:4}
  ];

  products = [];
  // product = [];
  flag1 = false;
  flag2 = false;
  constructor(private _api:ApiService) { }

  ngOnInit() {
    // this.products = this._api.getProducts();
  }

  getAllTasks(){
    this.flag1 = true;
  }

  getTaskDetails(id){
    this.flag2 = true;
    this.product = [];
    this.product.push(this.products[id].name);
    this.product.push(this.products[id].detail);
    this.ngOnInit();
  }

  clear(){
    this.flag1 = false;
    this.flag2 = false;
  }

  getTaskDetail(item){
    this.products = item;
    this.flag2 = true;
  }

}
