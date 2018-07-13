import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  products = [];
  product = [];
  flag1 = false;
  flag2 = false;
  constructor(private _api:ApiService) { }

  ngOnInit() {
    this.products = this._api.getProducts();
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

}
