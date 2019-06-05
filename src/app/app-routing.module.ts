import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LebowskiComponent } from './components/lebowski/lebowski.component';
import { JoelComponent } from './components/joel/joel.component';
import { WudangComponent } from './components/wudang/wudang.component';

import { CoffeeService } from './services/coffee.service';
import { StarbucksComponent } from './components/starbucks/starbucks.component';

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
  ]
})
export class AppRoutingModule { }
