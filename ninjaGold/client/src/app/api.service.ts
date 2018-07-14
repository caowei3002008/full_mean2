import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  records = [0, []];
  tempTotal = 0;
  meg = "";
  logs = [];

  constructor() { }
  getRecord(){
    return this.records;
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
