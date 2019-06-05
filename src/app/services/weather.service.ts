import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, from } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  data: any;

  constructor(
    private http: HttpClient
  ) {
  }

  getData(): Observable<any> {
    console.log('Wait very looonnnggggg44+!!! data is', this.data);

    if (!this.data) {
      return this.http.get('/assets/actors.json')
        .pipe(
          delay(9000),
          map(data => {
            this.data = data;

            console.log('set this.data', this.data);

            return data;
          })
        )
      ;
    } else {
      console.log('cached this.data', this.data);

      return from(this.data);
    }
  }
}
