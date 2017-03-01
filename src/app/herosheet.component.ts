import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import { Hero } from './class/hero'
import { HeroesService } from './services/heroes.service';

@Component({
    moduleId: module.id,
    selector: 'hero-sheet',
    templateUrl: 'templates/herosheet.component.html',
    //styleUrls: ['styles/herosheet.component.css'],
})

export class HeroSheetComponent implements OnInit{
    hero: Hero;

    tiles = [
        {text: 'Stats', cols: 2, rows: 4, color: 'red'},
        {text: 'Image', cols: 1, rows: 4, color: 'blue'},
        {text: 'Three', cols: 2, rows: 5, color: 'green'},
        {text: 'Four', cols: 2, rows: 5, color: 'black'},
    ];

    constructor(
        private heroesService: HeroesService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.heroesService.getHero(+params['Id']))
        .subscribe(hero => this.hero = hero);
    }
}