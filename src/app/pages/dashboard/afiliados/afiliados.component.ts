import { Component, OnDestroy, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// Store
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import * as actions from 'src/app/store/actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ab-afiliados',
  templateUrl: './afiliados.component.html',
  styleUrls: ['./afiliados.component.scss']
})
export class AfiliadosComponent implements OnInit, OnDestroy {
  isLoading = true;
  afiliados: any[];
  onSubsription: Subscription;
  token: string;

  constructor(private http: HttpClient,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.onSubsription = this.store.subscribe((state) => {
      this.token = state.user.token;
    });

    this.getAfiliados();

  }

  ngOnDestroy(){
    this.onSubsription?.unsubscribe();
  }


  getAfiliados(){
    const baseUrl = environment.apiURL + 'auth/users/affiliated';

    this.isLoading = true;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get<any>(baseUrl, {headers}).subscribe(result => {
      console.log('afiliados', result);
      this.afiliados = result.users;
      this.isLoading = false;
    });

  }

}
