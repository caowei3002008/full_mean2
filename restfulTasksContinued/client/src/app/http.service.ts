import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  tasks = ["Learn Angular - Understand services",
    "Manipulate DOM - Use the'for of' loop",
    "Bind events - Paretheses indicate events"
  ];
  constructor() { }

  getTasks(){
    return this.tasks;
  }

}
