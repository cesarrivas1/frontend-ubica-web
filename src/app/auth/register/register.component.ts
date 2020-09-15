import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';


@Component({
  selector: 'ab-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('placesRef') placesRef : GooglePlaceDirective;

  apiLoaded: Observable<boolean>;
  title: string;
  lat: number;
  lng: number;
  zoom: number;
  direction: any;
  mapTypeId: string;
  located: boolean;
  options = {
    types: [],
    componentRestrictions: { country: 'VE' }
  };

  constructor() {
    // this.lat = 40;
    // this.lng = -3;
    // this.zoom = 6;
    this.mapTypeId = 'hybrid';
    this.located = false;
  }

  public handleAddressChange(address: Address) {
    console.log(address);
    this.lat = address.geometry.location.lat();
    this.lng = address.geometry.location.lng();
    this.direction = address.address_components;

    console.log('Latitud :' + this.lat);
    console.log('Longitud :' + this.lng);
    console.log('Direccion :' + address.address_components);

  }

  ngOnInit(): void {
    this.getCurrentPosition();

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

}
