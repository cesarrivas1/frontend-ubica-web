import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'ab-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss']
})
export class RecoveryPasswordComponent implements OnInit {
  public param: string = '';
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(){
    this._route.params.subscribe((params : Params) => {
      this.param = params.email;
      console.log(this.param);
    });

  }

}
