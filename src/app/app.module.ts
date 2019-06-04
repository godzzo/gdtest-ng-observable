import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LebowskiComponent } from './lebowski/lebowski.component';
import { JoelComponent } from './joel/joel.component';

@NgModule({
  declarations: [
    AppComponent,
    LebowskiComponent,
    JoelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
