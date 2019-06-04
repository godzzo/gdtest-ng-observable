import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.getBuyers();
  }

  constructor(
    private http: HttpClient
  ) {
  }

  getBuyers(): Observable<any> {
    return this.http.get('/assets/persons.json')
      .pipe(
        delay(2500)
      )
    ;
  }
}
