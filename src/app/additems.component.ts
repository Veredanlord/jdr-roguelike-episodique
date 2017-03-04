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
export const TEST_VALUE = new OpaqueToken('');
export const ID = new OpaqueToken('');
export const NOM = new OpaqueToken('');
export const TYPE = new OpaqueToken('');
export const EFFET = new OpaqueToken('');
export const FORCE = new OpaqueToken('');
export const DEXTERITE = new OpaqueToken('');
export const INTELLIGENCE = new OpaqueToken('');
export const VITALITE = new OpaqueToken('');

@Component({
  selector: 'additems',
  templateUrl: 'app/templates/additems.component.html',
 
})
export class AddItemsComponent implements OnInit {

  @ViewChild('firstElement') private inputElement: MdlTextFieldComponent;

  public form: FormGroup;
  public nom = new FormControl('', Validators.required);
  public effet = new FormControl('', Validators.required);
  public type = new FormControl('', Validators.required);
  public force = new FormControl('', Validators.required);
  public dexterite = new FormControl('', Validators.required);
  public intelligence = new FormControl('', Validators.required);
  public vitalite = new FormControl('', Validators.required);

public _ID ='';
public _NOM ='';
public _TYPE = ('');
public _EFFET = ('');
public _FORCE = ('');
public _DEXTERITE = ('');
public _INTELLIGENCE = ('');
public _VITALITE = ('');

  public processingLogin = false;
  public statusMessage = '';

  constructor(
    private http: Http,
    private dialog: MdlDialogReference,
    private fb: FormBuilder,
    @Inject(ID) Id: string,
    @Inject(TEST_VALUE) testValue: string,
    @Inject(NOM) Nom: string,
    @Inject(TYPE) Type: string,
    @Inject(EFFET) Effet: string,
    @Inject(FORCE) Force: string,
    @Inject(DEXTERITE) Dexterite: string,
    @Inject(INTELLIGENCE) Intelligence: string,
    @Inject(VITALITE) Vitalite: string,
    

    ){
  this._ID=Id;
  this._NOM=Nom;
  this._TYPE=Type;
  this._EFFET=Effet;
  this._FORCE=Force;
  this._DEXTERITE=Dexterite;
  this._INTELLIGENCE=Intelligence;
  this._VITALITE=Vitalite;
  }




  public ngOnInit() {   
    this.form = this.fb.group({
      'nom': this._NOM,
      'effet': this._EFFET,
      'type': this._TYPE,
      'force': this._FORCE,
      'dexterite': this._DEXTERITE,
      'intelligence': this._INTELLIGENCE,
      'vitalite': this._VITALITE,


    });
   
  }
  public add() {
    console.log("|"+this._NOM+"|");
    if(this._NOM=' ' ){      
    this.http
      .get('http://5.135.179.131/WS/AddEquipement.php/?nom=' +this.form.get('nom').value+ '&effet=' + this.form.get('effet').value + '&type=' + this.form.get('type').value + '&visible=0&Force=' + this.form.get('force').value + '&Dexterite=' + this.form.get('dexterite').value + '&Intelligence=' + this.form.get('intelligence').value + '&Vitalite=' +this.form.get('vitalite').value)
      .toPromise();
    this.dialog.hide();}else{
 this.http
      .get('http://5.135.179.131/WS/UpdateEquipement.php/?id='+this._ID+'&nom=' +this.form.get('nom').value+ '&effet=' + this.form.get('effet').value + '&type=' + this.form.get('type').value + '&visible=0&Force=' + this.form.get('force').value + '&Dexterite=' + this.form.get('dexterite').value + '&Intelligence=' + this.form.get('intelligence').value + '&Vitalite=' +this.form.get('vitalite').value)
      .toPromise();
    this.dialog.hide()


    }
  }




  @HostListener('keydown.esc')
  public onEsc(): void {
    this.dialog.hide();
  }
}
