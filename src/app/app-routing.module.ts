import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LebowskiComponent } from './lebowski/lebowski.component';
import { JoelComponent } from './joel/joel.component';

const routes: Routes = [
  {path: 'lebowski/:name', component: LebowskiComponent},
  {path: 'joel/:name', component: JoelComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
