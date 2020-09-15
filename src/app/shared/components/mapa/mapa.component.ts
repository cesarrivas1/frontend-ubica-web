import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'ab-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  @ViewChild('placesRef') placesRef: GooglePlaceDirective;

  apiLoaded: Observable<boolean>;
  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string;
  located: boolean;

  constructor(httpClient: HttpClient) {
    this.lat = 40;
    this.lng = -3;
    this.zoom = 6;
    this.mapTypeId = 'hybrid';
    this.located = false;

    // this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyB7Qa4w4Y44p9MTyDsbnG_U3BCZo4Z53lM', 'callback')
    //     .pipe(
    //       map(() => true),
    //       catchError(() => of(false)),
    // );
   }

  ngOnInit(): void {
    this.getCurrentPosition();
  }

  getCurrentPosition(){
    navigator.geolocation.getCurrentPosition( position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.zoom = 17;
      this.located = true;
    });
  }

  public handleAddressChange(address: Address) {
    // Do some stuff
    console.log(address);

  }

}
