import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/store/actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ab-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(
    private _route : ActivatedRoute,
    private _router : Router,
    private store: Store<AppState>  ) { }

  home: string = '';
  onSubsription: Subscription;
  token: string;

  ngOnInit(){
    this._route.params.subscribe((params : Params) => {
      this.home = params.home;
      console.log(this.home);
    });

    this.onSubsription = this.store.subscribe((state) => {
      this.token = state.user.token;
    });
  }

  ngOnDestroy(){
    this.onSubsription?.unsubscribe();
  }

}
