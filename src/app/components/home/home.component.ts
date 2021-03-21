import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {SearchService} from '../../service/search.service';
import {Observable} from 'rxjs';

@Component ({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private router: Router, private searchService: SearchService) {
  }

  ngOnInit(): void {
  }

  search(form: NgForm): void {
    const { search_term } = form.value;
    console.log(search_term);
    this.router.navigateByUrl ('/results', { state: { term: search_term } }).then ();
  }

  findAllHashtagsSaved(): void {
    this.searchService.findAllHashtagsSearched().subscribe(data => {
      console.log(data);
    });
  }




}
