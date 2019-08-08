import { Component, OnInit } from '@angular/core';
import {Output, EventEmitter} from '@angular/core'
import { Joke } from '../joke/joke';


/*
  Create an EventEmitter...
  An EventEmitter is a helper class which we
  can us to emit events when somethign happens, other
  components can then bind and react to these events.

  import {Output,EventEmitter} from '@angular/core' ;

  We have now create an output eventpropety on the component.

  The name between the <> on the EventEmitter is the type 
  of the thing that will be output by this property.
  The syntax abouve is called generics a.

  When the jokeCreate event fires we are going to pass out
  an instance of Joke

*/




@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>() ;
  constructor() { }

  ngOnInit() {
  }


  createJoke(){
    this.jokeCreated.emit(new Joke("A setup","A punchline",true));
  }

}
