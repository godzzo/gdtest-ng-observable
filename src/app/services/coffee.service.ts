import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable, from, of } from 'rxjs';
import { map, delay, switchMap } from 'rxjs/operators';
import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService implements Resolve<any> {
  weather$: any;
  weatherRows: any;
  buyers: any;

  constructor(
    private http: HttpClient,
    private weather: WeatherService
  ) {
    this.weather$ = weather.getData();
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    console.log('CoffeeService.resolve >>> weatherData', this.weather$);
    console.log('CoffeeService.resolve >>> buyers', this.buyers);

    const buyers = this.getBuyers();

    console.log('CoffeeService.resolve >>> return buyers', buyers);

    return buyers;
  }

  getBuyers(): Observable<any> {
    if (this.buyers) {
      return of(this.buyers);
    } else {
      const buyers$ = this.weather$
        .pipe(
          map(rows => {
            this.weatherRows = rows;
          }),
          switchMap(el => {
            console.log('We have wather rows!!!', this.weatherRows);

            return this.http.get('/assets/persons.json')
          }),
          delay(2500)
        )
      ;

      buyers$.subscribe(rows => {
        console.log('buyers$.subscribe(rows AKA buyers', rows);

        this.buyers = rows;
      });

      return buyers$;
    }
  }
}
