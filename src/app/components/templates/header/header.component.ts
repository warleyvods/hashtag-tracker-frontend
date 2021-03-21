import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HashtagDialogComponent} from '../../dialog/hashtag-dialog/hashtag-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  searchHashtagInDatabase(): void {
    this.dialog.open(HashtagDialogComponent, {
      height: '320px',
      width: '600px',
    });
  }



}
