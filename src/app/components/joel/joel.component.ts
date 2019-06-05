import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-joel',
  templateUrl: './joel.component.html',
  styleUrls: ['./joel.component.scss']
})
export class JoelComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    console.log('JoelComponent >>> router', router);
    console.log('JoelComponent >>> activatedRoute', activatedRoute);

    router.events
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(e => e instanceof NavigationStart)
      ).subscribe(e => {
        const navigation = router.getCurrentNavigation();

        console.log('JoelComponent >>> navigation', navigation);
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
