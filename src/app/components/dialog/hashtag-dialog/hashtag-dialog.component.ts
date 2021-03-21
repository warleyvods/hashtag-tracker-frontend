import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SearchService} from '../../../service/search.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


export interface HashtagsSaved {
  id: number;
  hashtag: string;
}

@Component({
  selector: 'app-hashtag-dialog',
  templateUrl: './hashtag-dialog.component.html',
  styleUrls: ['./hashtag-dialog.component.scss']
})
export class HashtagDialogComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'hashtag'];
  dataSource = new MatTableDataSource<HashtagsSaved>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.findAllHashtagsSearched().subscribe(data => {
      this.dataSource = data;
    });
  }













}
