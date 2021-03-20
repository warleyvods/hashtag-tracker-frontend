import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../service/search.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  title = 'Foram realizadas 100 Buscas...'  ;

  term;
  subs: Subscription[] = [];
  markers: Marker[] = [];

  lat = -16.678418;
  lng = -49.809007;
  zoom = 5;

  constructor(private searchService: SearchService) { }

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
  latitude: number;
  longitude: number;
  label?: string;
  draggable: false;
}
