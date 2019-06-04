import { OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';

export class BasicComponent implements OnDestroy {

  unsubscribe$ = new Subject<void>();


  ngOnDestroy(): void {
    console.log('Destroying', this);

    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
