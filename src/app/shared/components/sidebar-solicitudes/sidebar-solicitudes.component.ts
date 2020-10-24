import { Component, Input, OnInit } from '@angular/core';

// Store
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import * as actions from 'src/app/store/actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sidebar-solicitudes',
  templateUrl: './sidebar-solicitudes.component.html',
  styleUrls: ['./sidebar-solicitudes.component.scss']
})
export class SidebarSolicitudesComponent implements OnInit {
  // @Input() applicants: any;
  public applicants: any;
  private onSubscription: Subscription;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.onSubscription = this.store.subscribe((state) => {
      this.applicants = state.aplicants.aplicants;
    });
  }

  getAplicant(id: string){
    console.log(id);
    const aplicant = this.applicants.filter(
      (data: { id: string }) =>
        data.id === id
    );
    this.store.dispatch(actions.setAplicantSelect({ aplicant}));
    this.store.dispatch(actions.stopLoading());

  }

}
