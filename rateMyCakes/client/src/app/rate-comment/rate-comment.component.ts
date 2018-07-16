import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-rate-comment',
  templateUrl: './rate-comment.component.html',
  styleUrls: ['./rate-comment.component.css']
})
export class RateCommentComponent implements OnInit {

  cakeR = {
    rate: Number,
    comment: ""
  };
  @Input() cakes: any;
  @Output() cakesId = new EventEmitter();

  constructor(private api:ApiService) { }

  ngOnInit() {
  }

  rate_comment(id, rate_comment): void{
    rate_comment.push(this.cakeR);
    this.cakeR = {
      rate: Number,
      comment: ""
    };
    this.api.updateCake({'id':id, 'rate_comment': rate_comment})
      .subscribe();
  }

  imageClickDetails(id){
    console.log(id);
    this.cakesId.emit(id);
  }
}
