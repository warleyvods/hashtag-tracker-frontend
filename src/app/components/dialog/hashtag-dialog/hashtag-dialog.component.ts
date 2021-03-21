import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SearchService} from '../../../service/search.service';

@Component({
  selector: 'app-hashtag-dialog',
  templateUrl: './hashtag-dialog.component.html',
  styleUrls: ['./hashtag-dialog.component.scss']
})
export class HashtagDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.findAllHashtagsSearched().subscribe(data => {
      console.log(data);
    });
  }

}
