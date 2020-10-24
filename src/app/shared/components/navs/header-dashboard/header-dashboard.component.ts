import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'ab-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.scss']
})
export class HeaderDashboardComponent implements OnInit {
  baseUrl = environment.apiURL + 'auth/logout';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  logout(){
    const headers = new HttpHeaders({
    });
  }

}
