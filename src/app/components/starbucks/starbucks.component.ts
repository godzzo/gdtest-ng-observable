import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-starbucks',
  templateUrl: './starbucks.component.html',
  styleUrls: ['./starbucks.component.scss']
})
export class StarbucksComponent implements OnInit {
  rows: any;

  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.data
      .pipe(
        map(data => data.rows)
      ).subscribe(rows => {
        console.log('StarbucksComponent >> constructor >> rows', rows);
        this.rows = rows;
      })
    ;
  }

  ngOnInit() {
  }
}
