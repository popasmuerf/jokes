import { Component } from '@angular/core';
//import {platformBrowserDynamic} from '@angular/platform-browser' ;

/*
  What is BootStrapping ?
  The Bootstrap identifies the root component that
  angular shouls bootstrap when it starts the applicatin
  We know that NgModulebut BrowserModule is the Angular
  Module that contains all the needed Angular bits and
  pieces to run our application in the browser.

  Angular itself is split ito separate Angular Modules so
  we only need to import the ones we really use.  Some other common
  ommon modules you wil see in the future are the FormsMOdule,RouterMOdule and
  HttpModule.

  WE also need to remember to import NgMOdule and Browser
  Model , like so:

  import {NgModule} from '@angular/core' ;
  import {BrowserModule} from '@angular/platform-browser" '

*/



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jokes';
}
