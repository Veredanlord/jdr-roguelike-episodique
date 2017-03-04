import {
  Component,
  ViewChild,
  HostListener,
  OnInit,
  Inject,
  OpaqueToken
} from '@angular/core';

import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { MdlTextFieldComponent } from 'angular2-mdl';
import { MdlDialogReference } from 'angular2-mdl';
import { Http } from '@angular/http';
export const TEST_VALUE = new OpaqueToken('test value');


@Component({
  selector: 'addspells',
  templateUrl: 'app/templates/addspells.component.html',
  styles: [
    `
     .status-bar {
         text-align: center;
     }
    `
  ]
})
export class AddSpellsComponent implements OnInit {

  @ViewChild('firstElement') private inputElement: MdlTextFieldComponent;

  public form: FormGroup;
  public nom = new FormControl('', Validators.required);
  public effet = new FormControl('', Validators.required);
  public type = new FormControl('', Validators.required);
  public force = new FormControl('', Validators.required);
  public dexterite = new FormControl('', Validators.required);
  public intelligence = new FormControl('', Validators.required);
  public vitalite = new FormControl('', Validators.required);

  public processingLogin = false;
  public statusMessage = '';

  constructor(
    private http: Http,
    private dialog: MdlDialogReference,
    private fb: FormBuilder,

    @Inject(TEST_VALUE) testValue: string) {

    console.log(`injected test value: ${testValue}`);

    // just if you want to be informed if the dialog is hidden
    this.dialog.onHide().subscribe((user) => {
      console.log('login dialog hidden');
      if (user) {
        console.log('authenticated user', user);
      }
    });

    this.dialog.onVisible().subscribe(() => {
      console.log('set focus');
      this.inputElement.setFocus();
    });

  }

  public ngOnInit() {
    this.form = this.fb.group({
      'nom': this.nom,
      'effet': this.effet,
      'type': this.type,
      'force': this.force,
      'dexterite': this.dexterite,
      'intelligence': this.intelligence,
      'vitalite': this.vitalite,


    });
  }
  public add() {
    /*this.http
      .get('http://5.135.179.131/WS/AddEquipement.php/?nom=' + this.nom.value + '&effet=' + this.effet.value + '&type=' + this.type.value + '&visible=0&Force=' + this.force.value + '&Dexterite=' + this.dexterite.value + '&Intelligence=' + this.intelligence.value + '&Vitalite=' + this.vitalite.value)
      .toPromise();*/
    this.dialog.hide();
  }




  @HostListener('keydown.esc')
  public onEsc(): void {
    this.dialog.hide();
  }
}
