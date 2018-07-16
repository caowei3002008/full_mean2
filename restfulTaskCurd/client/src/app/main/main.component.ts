import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _api: ApiService) { }

  tasks: any;

  flag = false;

  task = {
    _id: "",
    title:"",
    description: ""

  };

  taskTemp = {
    _id: "",
    title:"",
    description: ""

  };

  ngOnInit() {
    // this._api.getTasks();
    // this.tasks = this._api.getTasksUpdatedListener()
    //   .subscribe((tasks) =>{
    //     this.tasks = tasks;
    //   });
    this.getTasks();


  }

  // ngDoCheck(){
  //   this.getTasks();
  // }

  getTasks(){
    this._api.getTaskBack().subscribe(data => this.tasks = data);
  }

  createTask(): void{
    this._api.addTask({'title':this.task.title, 'description':this.task.description})
    .subscribe(data => console.log("Got data", data));
    this.getTasks();  }

  editTask(id,title,des){
    this.flag = true;
    this.taskTemp._id = id;
    this.taskTemp.title = title;
    this.taskTemp.description = des;
    this.getTasks();
  }

  updateTask(): void{
    let observable = this._api.updateTask({'id':this.taskTemp._id, 'title':this.taskTemp.title, 'description':this.taskTemp.description});
    observable.subscribe(data => console.log("Got data", data));
    this.flag = false;
    this.getTasks();  }

  deleteTask(id){
    let observable = this._api.deleteTask({'id':id});
    observable.subscribe(data => console.log("Got data", data));
    this.getTasks();  }



}
