import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import {Http, Response} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'spells',
    templateUrl: 'templates/spells.component.html',
    styleUrls: ['styles/spells.component.css'],
})

export class SpellsComponent{
data: Object;
constructor(public http: Http) {
    
  this.http.request('http://5.135.179.131/WS/ListCompetence.php/?callback=JSONP_CALLBACK')
            .subscribe((res: Response) => {
                this.data = res.json();              
            }); }
        }