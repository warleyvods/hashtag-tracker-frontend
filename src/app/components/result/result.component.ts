import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../service/search.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  title;
  // subtitle;
  term;
  subs: Subscription[] = [];
  markers: Marker[] = [];
  subtitle;
  lat = 26.3351;
  lng = 17.2283;
  zoom = 3;
  teste;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    const { term } = history.state;
    this.term = term;

    this.title = 'Hashtag consulted: ' + term;


    if (term != null) {
      this.searchService.findHashtagsLocation(term).subscribe( (data) => {
        this.markers = data;
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
