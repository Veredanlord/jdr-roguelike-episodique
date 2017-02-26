import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app.routing.module';

import { MdlModule } from "angular2-mdl";

import { AppComponent }  from './app.component';
import { HeroesComponent }   from './heroes.component';

import { HeroesService }          from './services/heroes.service';
import 'hammerjs';

@NgModule({
  imports:      [ BrowserModule, MaterialModule, MdlModule, AppRoutingModule, HttpModule, ],
  declarations: [ AppComponent, HeroesComponent ],
  providers: [ HeroesService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
