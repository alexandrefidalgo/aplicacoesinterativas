import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploNgifComponent } from './views/exemplo-ngif/exemplo-ngif.component';
import { Exercicio01Component } from './views/exercicio01/exercicio01.component';
import { Exercicio02Component } from './views/exercicio02/exercicio02.component';
import { Exercicio03Component } from './views/exercicio03/exercicio03.component';
import { ExemploNgforComponent } from './views/exemplo-ngfor/exemplo-ngfor.component';
import { Exercicio04Component } from './views/exercicio04/exercicio04.component';
import { Exercicio05Component } from './views/exercicio05/exercicio05.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploNgifComponent,
    Exercicio01Component,
    Exercicio02Component,
    Exercicio03Component,
    ExemploNgforComponent,
    Exercicio04Component,
    Exercicio05Component
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
