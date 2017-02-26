import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import {Http, Response} from '@angular/http';
@Component({
    moduleId: module.id,
    selector: 'items',
    templateUrl: 'templates/items.component.html',
    styleUrls: ['styles/items.component.css'],
})

export class ItemsComponent{
 data: Object;
constructor(public http: Http) {
    
  this.http.request('http://5.135.179.131/WS/ListEquipement.php/?callback=JSONP_CALLBACK')
            .subscribe((res: Response) => {
                this.data = res.json();
              
            }); }
        }

