import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  
  constructor() { }

  ngOnInit(): void {
  }

}
