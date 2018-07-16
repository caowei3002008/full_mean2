import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { };
  tasks : any;
  tasksUpdated = new Subject();

  // getTasks() {
  //   this.http.get("/all").subscribe((data) => {
  //     this.tasks = data;
  //     this.tasksUpdated.next([...this.tasks]);
  //   })
  //
  // }

  getTaskBack(): Observable<any>{
    return this.http.get("/all");
  }

  // getTasksUpdatedListener(){
  //   return this.tasksUpdated.asObservable();
  // }

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
