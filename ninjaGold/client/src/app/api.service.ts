import { Injectable } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {Http} from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  records = [0, []];
  tempTotal = 0;
  meg = "";
  logs = [];

  constructor(private _http:Http) { }
  getRecord(){
    return this.records;
  }

  getGoldsSaved(){
    return this._http.get('/gold/getSaved')
      .pipe(map((response: any) => response.json())).toPromise();

  }

  createNewGoldSave(newSave){
    return this._http.post('/gold/addNew', newSave)
      .pipe(map((response: any) => response.json()));
  }

  getRanmdomEarn(type){
      switch(type){
        case 1:
          var temp1 = Math.floor(Math.random() * 5) + 2;
          console.log("1 ",temp1);
          this.tempTotal += temp1;
          this.records[0] = this.tempTotal;
          this.meg = `You earned ${temp1} gold at the farm.`;
          this.logs.unshift(this.meg);
          this.records[1] = this.logs;

          break;
        case 2:
          var temp1 = Math.floor(Math.random() * 10) + 5;
          console.log("2 ",temp1);
          this.tempTotal += temp1;
          this.records[0] = this.tempTotal;
          this.meg = `You earned ${temp1} gold at the cave.`;
          this.logs.unshift(this.meg);
          this.records[1] = this.logs;
          break;
        case 3:
          var temp1 = Math.floor(Math.random() * 15) + 7;
          console.log("3 ",temp1);
          this.tempTotal += temp1;
          this.records[0] = this.tempTotal;
          this.meg = `You earned ${temp1} gold at the house`;
          this.logs.unshift(this.meg);
          this.records[1] = this.logs;

          break;
        case 4:
          var temp1 = Math.floor(Math.random() * 201) - 100;
          console.log("4 ",temp1);
          this.tempTotal += temp1;
          this.records[0] = this.tempTotal;
          if(temp1>=0) {this.meg = `You earned ${temp1} gold at the casino.`;}
          else{this.meg = `You lost ${temp1} gold at the casino`;}
          this.logs.unshift(this.meg);
          this.records[1] = this.logs;

          break;

      }
  }
}
