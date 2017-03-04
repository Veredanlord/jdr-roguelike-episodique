import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AddSpellsComponent,  TEST_VALUE} from './addspells.component';

import {  MdlDialogService,  MdlDialogReference} from 'angular2-mdl';
@Component({
    moduleId: module.id,
    selector: 'spells',
    templateUrl: 'templates/spells.component.html',
    styleUrls: ['styles/spells.component.css'],
})

export class SpellsComponent{



 data: Object;

   
    selectedOption: string;
    constructor(public http: Http, private dialogService: MdlDialogService,) {

        this.http.request('http://5.135.179.131/WS/ListCompetence.php/?callback=JSONP_CALLBACK')
                   .subscribe((res: Response) => {
                       this.data = res.json();              
                   }); }

    
  public showDialog($event: MouseEvent) {

    let pDialog = this.dialogService.showCustomDialog({
      component: AddSpellsComponent,
      providers: [{provide: TEST_VALUE, useValue: 'Just an example'}],
      isModal: true,
      styles: {'width': '300px'},
      clickOutsideToClose: true,
      openFrom: $event,
      enterTransitionDuration: 400,
      leaveTransitionDuration: 400
    });
  
  }

public delete(event: any){
       var idAttr = event.srcElement.attributes.id;
    var value = idAttr.nodeValue;
      console.log('derp '+value);

      this.http
.get('http://5.135.179.131/WS/DeleteCompetence.php/?id='+value)
.toPromise();

}

}