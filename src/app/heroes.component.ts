import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero } from './class/hero'
import { HeroesService } from './services/heroes.service';

@Component({
    moduleId: module.id,
    selector: 'heroes',
    templateUrl: 'templates/heroes.component.html',
    styleUrls: ['styles/heroes.component.css'],
})

export class HeroesComponent{
    heroes: Hero[];

    constructor(private heroesService:HeroesService){}

    ngOnInit(): void {
    this.heroesService.getHeroes();
  }
}