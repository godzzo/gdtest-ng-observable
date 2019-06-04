import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LebowskiComponent } from './lebowski/lebowski.component';
import { JoelComponent } from './joel/joel.component';
import { WudangComponent } from './wudang/wudang.component';
import { StarbucksComponent } from './starbucks/starbucks.component';

@NgModule({
  declarations: [
    AppComponent,
    LebowskiComponent,
    JoelComponent,
    WudangComponent,
    StarbucksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
