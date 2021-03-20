import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../service/search.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  term;
  subs: Subscription[] = [];
  markers: Marker[] = [];


  constructor(private searchService: SearchService) { }

  title = 'Foram realizadas 100 Buscas...'  ;
  lat = -16.678418;
  lng = -49.809007;


  ngOnInit(): void {
    const { term } = history.state;
    console.log('Dados: ' + term);
    this.term = term;

    if (term != null) {
      this.searchService.findHashtagsLocation(term).subscribe( (data) => {
        this.markers = data;
        console.log(this.markers);
      });
    }
  }
}


interface Marker {
  lat: number;
  lng: number;
  // label?: string;
  draggable: false;
}
