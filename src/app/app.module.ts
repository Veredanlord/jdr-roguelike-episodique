import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { MdlModule } from "angular2-mdl";

import { AppComponent }  from './app.component';

import 'hammerjs';

@NgModule({
  imports:      [ BrowserModule, MaterialModule, MdlModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
