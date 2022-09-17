import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DuasViasComponent } from './views/duas-vias/duas-vias.component';
import { Exercixio01Component } from './views/exercixio01/exercixio01.component';
import { Exercixio02Component } from './views/exercixio02/exercixio02.component';

@NgModule({
  declarations: [
    AppComponent,
    DuasViasComponent,
    Exercixio01Component,
    Exercixio02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
