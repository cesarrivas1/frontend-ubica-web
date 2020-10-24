import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";

// Store
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import * as actions from 'src/app/store/actions';
import { Subscription } from 'rxjs';

import { IAplicantsEntity } from 'src/app/shared/models/IAplicantsEntity';
import { isLoading } from '../../../store/actions/ui.action';

@Component({
  selector: 'ab-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit, OnDestroy {
  baseUrl = environment.apiURL + 'auth/users/request';
  solicitudes: any;
  token: string;
  applicants: IAplicantsEntity[];
  aplicant: IAplicantsEntity[];
  onSubsription: Subscription;
  isLoading: boolean;
  loadingAplicant = true;

  constructor(private http: HttpClient,
              private spinner: NgxSpinnerService,
              private store: Store<AppState>) {

               }

  ngOnInit(): void {
    this.onSubsription = this.store.subscribe((state) => {
      this.token = state.user.token !== null ? state.user.token : localStorage.getItem('token');
      this.isLoading = state.ui.isLoading;
      console.log(typeof(this.token));
    });
    this.getSolicitudes();

  }

  ngOnDestroy(){
    this.onSubsription?.unsubscribe();
  }

  getSolicitudes(){
    this.spinner.show();
    this.isLoading = true;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get<any>(this.baseUrl, {headers}).subscribe(result => {
      console.log('solicitantes', result);
      this.store.dispatch(actions.setAplicants({aplicants: result.users}))
      this.applicants = result.users;
      this.isLoading = false;
    });
    this.spinner.hide();

  }

  getAplicant(id: number){
    this.spinner.show();
    console.log(id);
    this.aplicant = this.applicants.filter(
      (data: { id: number }) =>
        data.id === id
    );
    this.loadingAplicant = false;
    console.log('AplicantSelect',this.aplicant[0].name);
    this.spinner.hide();
  }

}
