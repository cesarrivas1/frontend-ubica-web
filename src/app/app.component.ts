import { Component} from '@angular/core';

// Store
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import * as actions from 'src/app/store/actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Ubica';
  onSubsription: Subscription;
  token: string;
}


