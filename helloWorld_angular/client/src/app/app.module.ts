import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ApiService} from "./api.service";
// import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    // HttpModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
