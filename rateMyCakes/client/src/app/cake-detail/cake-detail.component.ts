import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-cake-detail',
  templateUrl: './cake-detail.component.html',
  styleUrls: ['./cake-detail.component.css']
})
export class CakeDetailComponent implements OnInit {

  constructor(private api:ApiService) { }
  @Input() cake_id:any;
  cake: any;
  avg = 0;

  ngOnInit() {
    this.api.findOne({"id":this.cake_id}).subscribe(data => this.cake = data);
    this.getAveRate();

  }

  getAveRate(){
    let totalPoints = 0;
    for(let i = 0; i<this.cake.rate_comment.length; i++){

      totalPoints += this.cake.rate_comment[i].rate;
    }
    this.avg = totalPoints/this.cake.rate_comment.length;
  }

}
