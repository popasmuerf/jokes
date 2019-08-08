import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokelistComponent } from './jokelist/jokelist.component';
import { JokeFormComponent } from './joke-form/joke-form.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokelistComponent,
    JokeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap:[JokelistComponent]
})
export class AppModule { }
