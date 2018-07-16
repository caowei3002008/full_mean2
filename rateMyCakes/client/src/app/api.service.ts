import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  createCake(cake){
    return this.http.post('/create', cake);
  }

  updateCake(cake){
    return this.http.post('/update', cake);
  }

  getAllCake(): Observable<any>{
    return this.http.get("/all");
  }

  findOne(id){
    return this.http.post("/find",id);
  }
}
