import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';
import { HeroesComponent }   from './heroes.component';
import { ItemsComponent }   from './items.component';
import { SpellsComponent }   from './spells.component';
import { HeroSheetComponent } from './herosheet.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes',  component: HeroesComponent },
  { path: 'items',  component: ItemsComponent },
  { path: 'spells',  component: SpellsComponent },
  { path: 'spells',  component: SpellsComponent },
  { path: 'hero/:Id',  component: HeroSheetComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}