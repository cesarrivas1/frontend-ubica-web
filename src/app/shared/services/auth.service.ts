import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IUser } from '../models/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // TODO crear un modelo para la data.
  register(data: any){
    const baseUrl = environment.apiURL + 'auth/signup';

    // const formData = new FormData();
    // formData.append('avatar', data.avatar);

    // console.log(formData);

    // const body = {
    //   name: (data as any).name,
    //   surname: (data as any).surname,
    //   email: (data as any).email,
    //   password: (data as any).password,
    //   password_confirmation: (data as any).password_confirmation,
    //   birth_date: (data as any).birth_date,
    //   gender: (data as any).gender,
    //   latitude: (data as any).latitude,
    //   longitude: (data as any).longitude,
    //   app: (data as any).app,
    //   avatar: (data as any).avatar
    // };
    // console.log(body);

    const headers = new HttpHeaders({
      "Content-Type": "application/json; charset=UTF-8; multipart/form-data",
    });

    return this.http.post<any>(baseUrl, JSON.stringify(data), {headers})
    .subscribe( data => {
      console.log(data);
    });
  }

  login(data: any){
    const baseUrl = environment.apiURL + 'auth/login';

    const headers = new HttpHeaders({
      "Content-Type": "application/json; charset=UTF-8; multipart/form-data",
    });

    return this.http.post<any>(baseUrl, JSON.stringify(data), {headers});
  }

}
