import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RateCommentComponent } from './rate-comment/rate-comment.component';
import { CakeDetailComponent } from './cake-detail/cake-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ApiService} from "./api.service";

@NgModule({
  declarations: [
    AppComponent,
    RateCommentComponent,
    CakeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
