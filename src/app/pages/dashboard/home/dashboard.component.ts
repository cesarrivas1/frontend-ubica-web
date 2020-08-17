import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'ab-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _route : ActivatedRoute,
    private _router : Router
  ) { }

  home: string = '';

  ngOnInit(){
    this._route.params.subscribe((params : Params) => {
      this.home = params.home;
      console.log(this.home);
    });
  }

}
