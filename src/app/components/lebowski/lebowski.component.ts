import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

import { filter, takeUntil } from 'rxjs/operators';

import { BasicComponent } from 'shared/component/basic.component';

@Component({
  selector: 'app-lebowski',
  templateUrl: './lebowski.component.html',
  styleUrls: ['./lebowski.component.scss']
})
export class LebowskiComponent extends BasicComponent implements OnInit {
  name: string = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    super();

    console.log('LebowskiComponent: router', router);
    console.log('LebowskiComponent: activatedRoute', activatedRoute);

    activatedRoute.params.subscribe(data => {
      this.name = data.name;
    });

    router.events
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(e => e instanceof NavigationStart)
      )
      .subscribe(e => {
        const navigation = router.getCurrentNavigation();

        console.log('LebowskiComponent: navigation', navigation);
      }
    );
  }

  ngOnInit() {
  }

}
