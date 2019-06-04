import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LebowskiComponent } from './lebowski/lebowski.component';
import { JoelComponent } from './joel/joel.component';
import { WudangComponent } from './wudang/wudang.component';

import { CoffeeService } from './services/coffee.service';
import { StarbucksComponent } from './starbucks/starbucks.component';

const routes: Routes = [
  {path: 'lebowski/:name', component: LebowskiComponent},
  {path: 'joel/:name', component: JoelComponent},
  {path: 'wudang/:name', component: WudangComponent},
  {path: 'starbucks/:name', component: StarbucksComponent, resolve: {rows: CoffeeService}}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CoffeeService
  ]
})
export class AppRoutingModule { }
