import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { };
  tasks : any;
  tasksUpdated = new Subject();

  getTasks() {
    this.http.get("http://localhost:8000/all").subscribe((data) => {
      this.tasks = data;
      this.tasksUpdated.next([...this.tasks]);
    })

  }

  getTasksUpdatedListener(){
    return this.tasksUpdated.asObservable();
  }

  addTask(task){
    return this.http.post("/create", task);
  }

  updateTask(task){
    return this.http.post("/update", task);
  }

  deleteTask(id){
    return this.http.post("/delete", id);
  }



}
