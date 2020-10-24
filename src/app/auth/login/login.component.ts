import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/store/actions';

@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  public forma: FormGroup;
  public publicToken: string;
  public isLoading: boolean;
  public urlApi =  environment.apiURL + 'auth/login';

  constructor(private http: HttpClient,
              private _fb : FormBuilder,
              private store: Store<AppState>,
              public router: Router) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(){
    this.forma = this._fb.group({
      email: ['', [Validators.required,  Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember_me: [true],
      app: [0],
    });
  }

  onInvalidField(fieldTag){
    return this.forma.get(fieldTag).invalid && this.forma.get(fieldTag).touched;
  }

  onValidator(fieldTag: string, validatorTag: string){
    const field = this.forma.controls[fieldTag];
    return field.errors && field.errors[validatorTag] && field.touched;
  }

  login(){

    this.isLoading = true;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8; multipart/form-data'
    });

    this.http.post(this.urlApi, JSON.stringify(this.forma.value), {headers}).toPromise()
    .then( (data: any ) => {
      console.log(data);
      this.store.dispatch(actions.setAuthToken({token: data.access_token}));
      localStorage.setItem('token', JSON.stringify(data.access_token));
      this.isLoading = false;
      this.router.navigateByUrl('/dashboard/home');

    })
    .catch( err => {
      Swal.fire({
        icon: 'error',
        title: 'Lo Sentimos',
        text: 'No pudimos procesar tus datos',
      });
      this.isLoading = false;
      this.forma.reset();
    });

  }

}
