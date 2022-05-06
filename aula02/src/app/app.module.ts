import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingsComponent } from './views/bindings/bindings.component';
import { ExerciciosComponent } from './views/exercicios/exercicios.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    ExerciciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
