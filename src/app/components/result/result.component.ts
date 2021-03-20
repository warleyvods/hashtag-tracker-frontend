import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor() { }

  title = 'My first AGM project';
  lat = -16.678418;
  lng = -49.809007;


  markers: marker[] = [
    {
      lat: -23.55,
      lng: -46.6333,
      label: 'A',
      draggable: true
    },
    {
      lat: -16.68737425,
      lng: -49.24084953,
      label: 'B',
      draggable: false
    },
    {
      lat: -16.7133,
      lng: -49.29355,
      label: 'C',
      draggable: true
    }
  ];

  ngOnInit(): void {
  }
}


interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
