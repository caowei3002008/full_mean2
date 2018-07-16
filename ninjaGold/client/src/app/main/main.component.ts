import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  records = {
    totalEarn: 0,
    logs: []
  };
  constructor(private _api:ApiService) { }

  ngOnInit() {
    // this.records = this._api.getRecord();
    this.getEarnSaved()
  }



  onClickRandom(type){
    // this._api.getRanmdomEarn(type);
    // this.records = this._api.getRecord();

  }

  getEarnSaved(){
    this._api.getGoldsSaved()
      .then((data) =>{
        console.log(data.length);
            if(data.length<3) this._api.createNewGoldSave(this.records);
              console.log("got it", this.records);
      })
      .catch((err)=>{

        console.log("catch",err);
      })
  }
}
