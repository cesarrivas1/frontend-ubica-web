import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable} from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import Swal from 'sweetalert2';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { NgxSpinnerService } from 'ngx-spinner';

// import { AuthService } from '../../shared/services/auth.service';
import { validarQueSeanIguales } from '../../shared/class/validators';
import { environment } from 'src/environments/environment';

import * as moment from 'moment';

@Component({
  selector: 'ab-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('placesRef') placesRef : GooglePlaceDirective;

  // public apiLoaded: Observable<boolean>;
  public isLoading: boolean;
  public title: string;
  public lat: number;
  public lng: number;
  public zoom: number;
  public direction: any;
  public mapTypeId: string;
  public located: boolean;
  public hide = true;
  public mapVisible = false;
  public forma: FormGroup;
  public url: any = '';
  // public options = {
  //   types: [],
  //   componentRestrictions: { country: 'VE' }
  // };
  options = {
    types: [],
  };
  filedata: any;

	separateDialCode = false;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  

  constructor(private _fb : FormBuilder,
              public router: Router,
              private spinner: NgxSpinnerService,
              private http: HttpClient) {
    this.mapTypeId = 'hybrid';
    this.located = false;
    console.log(this.mapVisible);
    this.directionIni();
    this.getCurrentPosition();
    this.crearFormulario();
    console.log('Cargo el constructor');
  }

  ngOnInit(): void {
    this.directionIni();
    this.getCurrentPosition();
    this.crearFormulario();
    console.log('Cargo el OnInit');

  }

  directionIni(){
    this.direction = {
      address: '',
      countryCodename: '',
      stateCodename: '',
      city: '',
      state: '',
      country: '',
      postalCode: '',
    };
  }

  getCurrentPosition(){

    if ('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition( position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 17;
        this.located = true;
      });
    }

  }

  crearFormulario(){

    this.forma = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', Validators.required],
      phone: ['', Validators.required],
      birth_date: ['', Validators.required],
      gender: ['M', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      description: ['', Validators.required],
      city: [''],
      state: [''],
      country: [''],
      address: [''],
      avatar: [null],
      app: [0, Validators.required]
    },
    {
      validators: validarQueSeanIguales,
    });

    console.log(this.forma.value);
  }

  campoNoValido(campo: string) {
    return this.forma.get(campo).invalid && this.forma.get(campo).touched;
  }

  checarSiSonIguales(): boolean  {
    return  this.forma.hasError('noSonIguales')  &&
      this.forma.get('password').dirty &&
      this.forma.get('password_confirmation').dirty;
  }

  handleAddressChange(address: Address) {
    this.mapVisible = true;
    if (address){
      const direc = address.name;
      this.direction.address = direc;
    }

    console.log('direccion', address);

    const response = address.address_components;
    const countrySearch = response.filter( type => type.types[0] === 'country');
    if (countrySearch[0]){
      if (countrySearch[0].short_name){
        const countryCodename = countrySearch[0].short_name;
        this.direction.countryCodename = countryCodename;

      }
      if (countrySearch[0].long_name){
        const country = countrySearch[0].long_name;
        this.direction.country = country;

      }
    }

    const stateSearch = response.filter( type => type.types[0] === 'administrative_area_level_1');
    if (stateSearch[0]){
        if (stateSearch[0].short_name){
          const stateCodename = stateSearch[0].short_name;
          this.direction.stateCodename = stateCodename;
        }
        if (stateSearch[0].long_name){
          const state = stateSearch[0].long_name;
          this.direction.state = state;
        }
    }

    const localitySearch = response.filter( type => type.types[0] === 'administrative_area_level_2');
    // const locality = localitySearch[0].long_name;
    if (localitySearch[0]){
      const locality = localitySearch[0];
      this.direction.city = locality.long_name;
    }

    const postalCodeSsearch = response.filter( type => type.types[0] === 'postal_code');
    if (postalCodeSsearch[0]){
      const postalCode = postalCodeSsearch[0];
      this.direction.postalCode = postalCode.long_name;
    }

    this.lat = address.geometry.location.lat();
    this.lng = address.geometry.location.lng();

    const latString = (this.lat).toString;
    const longString =(this.lng).toString;

    this.forma.patchValue({
      address: address.formatted_address,
      latitude: this.lat.toString(),
      longitude: this.lng.toString(),
      city: this.direction.city,
      state: this.direction.state,
      country: this.direction.country
    });
  }

  showMap(){
    this.mapVisible = !this.mapVisible;
    console.log(this.mapVisible);
  }

  onInvalidField(fieldTag){
    return this.forma.get(fieldTag).invalid && this.forma.get(fieldTag).touched;
  }

  onValidator(fieldTag: string, validatorTag: string){
    const field = this.forma.controls[fieldTag];
    return field.errors && field.errors[validatorTag] && field.touched;
  }

  fileEvent(e){
    this.filedata = (e.target as HTMLInputElement).files[0];
    console.log(this.filedata);
    this.forma.patchValue({
        avatar: this.filedata
    });

    // Show image before upload
    let reader = new FileReader();
    reader.onload = (event:any) => {
      this.url = event.target.result;
    }
    reader.readAsDataURL(this.filedata);
  }

  save(){
    console.log(this.forma.value);
    this.spinner.show();
    if ( this.forma.invalid ){ return; }
    this.isLoading = true;

    const momentDate = new Date(this.forma.get('birth_date').value);
    const formattedDate = moment(momentDate).format("YYYY/MM/DD");
    console.log(formattedDate);
    this.forma.patchValue({
      birth_date: formattedDate,
      app: 0
    });

    let formdata = new FormData();
    formdata.append("avatar",  this.forma.get('avatar').value);
    formdata.append("name", this.forma.get('name').value);
    formdata.append("surname", this.forma.get('surname').value);
    formdata.append("email", this.forma.get('email').value);
    formdata.append("phone", this.forma.get('phone').value);
    formdata.append("description", this.forma.get('description').value);
    formdata.append("password", this.forma.get('password').value);
    formdata.append("password_confirmation", this.forma.get('password_confirmation').value);
    formdata.append("birth_date", this.forma.get('birth_date').value);
    formdata.append("gender", this.forma.get('gender').value);
    formdata.append("latitude", this.forma.get('latitude').value);
    formdata.append("longitude", this.forma.get('longitude').value);
    formdata.append("country", this.forma.get('country').value);
    formdata.append("state", this.forma.get('state').value);
    formdata.append("city", this.forma.get('city').value);
    formdata.append("address", this.forma.get('address').value);
    formdata.append("app",  this.forma.get('app').value);

    const baseUrl = environment.apiURL + 'auth/signup';
    const headers = new HttpHeaders({
      // 'Content-Type': false,
      'X-Requested-With': 'XMLHttpRequest'
    });

    this.http.post(baseUrl, formdata, {headers}).toPromise()
    .then( (data: any ) => {
      console.log(data);
      this.isLoading = false;
      this.forma.reset();
      Swal.fire({
        icon: 'success',
        title: 'Usuario registrado exitosamente',
      });
      this.spinner.hide();
      this.router.navigateByUrl('/login');

    })
    .catch( err => {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: err,
        text: 'No pudimos procesar tus datos',
      });
      this.isLoading = false;
      this.forma.reset();
      this.spinner.hide();

    });

  }


}
