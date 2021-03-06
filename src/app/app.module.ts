import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MdlModule } from "angular2-mdl";

import { AppComponent }  from './app.component';
import { HeroesComponent }   from './heroes.component';

import { HeroesService }          from './services/heroes.service';
import { ItemsComponent }   from './items.component';
import { SpellsComponent }   from './spells.component';
import { AddItemsComponent }   from './additems.component';

import { AddSpellsComponent }   from './addspells.component';

import { HeroSheetComponent } from './herosheet.component';


import 'hammerjs';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, MaterialModule, MdlModule, AppRoutingModule, HttpModule, ],

  declarations: [ AppComponent, HeroesComponent, ItemsComponent, SpellsComponent, AddItemsComponent, HeroSheetComponent,AddSpellsComponent ],

  providers: [ HeroesService, ],
  bootstrap:    [ AppComponent ],
  entryComponents : [ AddItemsComponent,AddSpellsComponent, ],
})
export class AppModule { }
