import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tasks = [];
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.tasks = this._http.getTasks();
  }

}
