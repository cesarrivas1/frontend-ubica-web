import { Component, OnInit } from '@angular/core';
import { faBars, faHome, faBuilding, faAddressCard, faClipboardList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faBars = faBars;
  faHome = faHome;
  faBuilding = faBuilding;
  faAddressCard = faAddressCard;
  faClipBoardList = faClipboardList;
  
  constructor() { }

  ngOnInit(): void {
  }

}
