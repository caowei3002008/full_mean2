import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  records = [];
  constructor(private _api:ApiService) { }

  ngOnInit() {
    this.records = this._api.getRecord();
  }



  onClickRandom(type){
    this._api.getRanmdomEarn(type);
    this.records = this._api.getRecord();

  }
}
