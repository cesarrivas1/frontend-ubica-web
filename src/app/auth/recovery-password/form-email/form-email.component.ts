import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'ab-form-email',
  templateUrl: './form-email.component.html',
  styleUrls: ['./form-email.component.scss']
})
export class FormEmailComponent implements OnInit {
  public forma: FormGroup;
  public isLoading: boolean;
  public urlApi =  environment.apiURL + 'auth/user/recoverypassword';

  constructor(private http: HttpClient,
              private _fb : FormBuilder,
              public router: Router) { }

  ngOnInit(): void {
    this.isLoading = false;
    this.crearFormulario();
    console.log(this.forma);
  }

  crearFormulario(){
    this.forma = this._fb.group({
      email: ['', [Validators.required,  Validators.email]],
    });
  }

  onInvalidField(fieldTag){
    return this.forma.get(fieldTag).invalid && this.forma.get(fieldTag).touched;
  }

  onValidator(fieldTag: string, validatorTag: string){
    const field = this.forma.controls[fieldTag];
    return field.errors && field.errors[validatorTag] && field.touched;
  }

  recoveryPassword(){

    this.isLoading = true;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8; multipart/form-data',
      'Authorization': environment.bearerToken,
      'X-Requested-With': 'XMLHttpRequest'
    });

    this.http.post(this.urlApi, JSON.stringify(this.forma.value), {headers}).toPromise()
    .then( (data: any ) => {
      console.log(data);
      this.router.navigateByUrl('/recovery/email');
      this.isLoading = false;
    })
    .catch( err => {
      Swal.fire({
        icon: 'error',
        title: 'Lo Sentimos',
        text: 'Error en la solicitud',
      });
      this.forma.reset();
      this.isLoading = false;
    });
  }

}
