import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-wudang',
  templateUrl: './wudang.component.html',
  styleUrls: ['./wudang.component.scss']
})
export class WudangComponent implements OnInit {
  rows: any;

  constructor(
    private http: HttpClient
  ) {

    http.get('/assets/persons.json')
      .pipe(
        delay(2500)
      )
      .subscribe(resp => {
        console.log('persons', resp);
        this.rows = resp;
      }
    );
  }

  ngOnInit() {
  }

}
