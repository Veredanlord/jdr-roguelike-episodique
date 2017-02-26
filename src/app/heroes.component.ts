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

export class HeroesComponent implements OnInit{
    heroes: Hero[];
    errorMessage: string;
    mode = 'Observable';

    constructor(private heroesService:HeroesService){}

    ngOnInit() { this.getHeroes();} 

    getHeroes() {
    this.heroesService.getHeroes()
                     .subscribe(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);
  }
}