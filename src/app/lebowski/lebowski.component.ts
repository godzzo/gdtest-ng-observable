import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-lebowski',
  templateUrl: './lebowski.component.html',
  styleUrls: ['./lebowski.component.scss']
})
export class LebowskiComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    console.log('LebowskiComponent: router', router);
    console.log('LebowskiComponent: activatedRoute', activatedRoute);

    router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
      const navigation = router.getCurrentNavigation();

      console.log('LebowskiComponent: navigation', navigation);
    });
  }

  ngOnInit() {
  }

}
