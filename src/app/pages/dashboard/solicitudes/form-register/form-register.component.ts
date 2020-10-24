import { Component, Input, OnDestroy, OnInit } from '@angular/core';

// Store
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import * as actions from 'src/app/store/actions';
import { Subscription } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Router} from '@angular/router';


import { IAplicantsEntity } from '../../../../shared/models/IAplicantsEntity';
import { isLoading } from '../../../../store/actions/ui.action';
import { environment } from 'src/environments/environment';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

@Component({
  selector: 'ab-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit, OnDestroy {

  token: string;
  onSubsription: Subscription;
  aplicant: IAplicantsEntity[];
  typeAfiliation: any[];
  affiliate_type_id: string;
  folio_number: string;
  received_payment= 1;

  bussines: any[];
  services: any[];
  entrepreneurs: any[];

  bussineSelected: any;
  servicesSelected: any;
  entrepreneursSelected: any;

  bussinesRequest: any[] = [];
  servicesRequest: any[] = [];
  entrepreneursRequest: any[] = [];

  selectServices = false;
  selectBussines = false;
  selectEntrepreneurs = false;
  isLoading = false;

  dropdownSettings: IDropdownSettings;
  dropdownList = [];
  selectedItems = [];

	separateDialCode = false;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  
  @Input() applicants: IAplicantsEntity[];
  constructor(private store: Store<AppState>,
              private http: HttpClient,
              private router : Router,
              private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.onSubsription = this.store.subscribe((state) => {
      this.aplicant = state.aplicants.aplicant;
      this.isLoading = state.ui.isLoading;
      this.token = state.user.token;
    });

    this.getTypeAfilition();
    this.getBusiness();
    this.getServices();
    this.getEntrepreneurship();


    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true,
      limitSelection: 4
    };
  }

  ngOnDestroy(){
    this.onSubsription?.unsubscribe();
  }

  selectType(id: any){
    if (!isNaN(id)){
      // tslint:disable-next-line: radix
      id = parseInt ( id );
      this.affiliate_type_id = id;
      this.bussinesRequest.length      = 0;
      this.servicesRequest.length      = 0;
      this.entrepreneursRequest.length = 0;
      console.log(typeof(this.affiliate_type_id));
    }
  }

  changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}

  onItemSelectBussines(item: any) {
    console.log(item);
    console.log(this.bussineSelected.id)
    this.bussinesRequest.push(item.id);
    console.log(this.bussinesRequest);
  }

  onItemSelectServices(item: any) {
    console.log(item);
    this.servicesRequest.push(item.id);
    console.log(this.servicesRequest);
  }

  onItemSelectEntrepreneurs(item: any) {
    console.log(item);
    this.entrepreneursRequest.push(item.id);
    console.log(this.entrepreneursRequest);
  }

  removeItemFromArr( arr, item ) {
    const i = arr.indexOf( item.id );
    if ( i !== -1 ) {
        arr.splice( i, 1 );
    }
    console.log(arr);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  deleteRequest(id: number){

    const baseUrl = environment.apiURL + 'auth/requests/' + id;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + `${this.token}`,
      'Accept': 'application/json',
    });

    return this.http.delete(`${baseUrl}`, {headers}).toPromise()
    .then( (data: any ) => {
      Swal.fire({
        icon: 'success',
        title: 'Felicidades',
        text: 'Solicitud eliminada exitosamente!',
      });
      this.isLoading = true;
    })
    .catch( err => {
      Swal.fire({
        icon: 'error',
        title: 'Lo Sentimos',
        text: 'Error al aliminar la solicitud',
      });
      this.isLoading = false;
    });

  }

  manageRequest(id: number){
    this.isLoading = true;
    const baseUrl = environment.apiURL + 'auth/requests/' + id;

    const headers = new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': 'Bearer ' + this.token
    });

    if (this.affiliate_type_id !== undefined){
      return this.http.post(baseUrl, {
          affiliate_type_id: parseInt(this.affiliate_type_id),
          reference: this.aplicant[0].affiliate_code,
          received_payment: this.received_payment,
          folio_number: this.folio_number,
          _method: 'PUT',
          amount: 10.00,
          businesses: this.bussinesRequest,
          services: this.servicesRequest,
          entrepreneurs: this.entrepreneursRequest
        }, {headers}).toPromise()
      .then( (data: any ) => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Felicidades',
          text: 'Solicitud procesada exitosamente!',
        });
        this.isLoading = true;
        this.selectBussines = false;
        this.selectEntrepreneurs = false;
        this.selectServices = false;
        this.router.navigateByUrl('/afiliados');
      })
      .catch( err => {
        Swal.fire({
          icon: 'error',
          title: 'Lo Sentimos',
          text: 'Error al procesar la solicitud',
        });
        this.isLoading = false;
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'Debe seleccionar un tipo de afiliacion',
      });
      this.isLoading = false;
    }

  }

  getTypeAfilition(){
    const baseUrl = environment.apiURL + 'auth/affiliatetypes';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
      'Accept': 'application/json',

    });

    return this.http.get<any>(baseUrl, {headers}).subscribe(result => {
      console.log('typeAfiliation', result.affiliatetypes);
      this.typeAfiliation = result.affiliatetypes;
    });

  }

  getBusiness(){
    const baseUrl = environment.apiURL + 'auth/business';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
      'Accept': 'application/json',

    });

    return this.http.get<any>(baseUrl, {headers}).subscribe(result => {
      console.log('typeAfiliation', result.businesses);
      console.log(result);
      this.bussines = result.businesses;
      console.log(this.bussines);
    });

  }

  getServices(){
    const baseUrl = environment.apiURL + 'auth/services';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
      'Accept': 'application/json',

    });

    return this.http.get<any>(baseUrl, {headers}).subscribe(result => {
      console.log('typeAfiliation', result.businesses);
      console.log(result);
      this.services = result.services;
    });

  }



  getEntrepreneurship(){
    const baseUrl = environment.apiURL + 'auth/entrepreneurs';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
      'Accept': 'application/json',

    });

    return this.http.get<any>(baseUrl, {headers}).subscribe(result => {
      console.log('emprendimientos', result);
      this.entrepreneurs = result.entrepreneurs;
    });

  }

  interaccionBtn(id: string){
    switch (id) {

      case '1': {
        this.selectServices = false;
        this.selectBussines = true;
        this.selectEntrepreneurs = false;
         break;
      }
      case '2': {
        this.selectServices = true;
        this.selectBussines = false;
        this.selectEntrepreneurs = false;
        break;
      }
      case '3': {
        this.selectServices = false;
        this.selectBussines = false;
        this.selectEntrepreneurs = true;
        break;
      }
   }
  }

}
