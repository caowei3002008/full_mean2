import { Component } from '@angular/core';
import {ApiService} from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cake = {
    name: "",
    url: "",
    rate_comment: []
  };

  cakes: any;
  cake_id = "";
  flag = false;

  ngOnInit() {
    this.getCakesList();
  }

  constructor(private api: ApiService){

  }

  createNewCake(){
    this.api.createCake({'name': this.cake.name, 'imageUrl': this.cake.url, 'rate_comment':this.cake.rate_comment})
      .subscribe(data=> console.log("Got it",data));
      this.getCakesList();
  }

  getCakesList(){
    this.api.getAllCake().subscribe(data => this.cakes = data);
  }
  getCakeById(id){
    this.flag = true;
    this.cake_id = id;
  }
}
