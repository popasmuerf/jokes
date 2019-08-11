import { Component, OnInit } from '@angular/core';
import {Joke} from '../joke/joke'
/*
  Breaking this down, in the template, we bind the
  jokeCreated property like so:

  <joke-form (jokeCreated)="addJoke($event)"><joke-form>


  this calls the addJoke function when the jokeCrated property outputs
  an event.


  $event is a specal variable and holds whatever was emitted by
  the jokeCreated EventEmitter, in our cas its an
  instance of a Joke


  addJoke(joke){
    this.jokes.unshift(joke);
  }




*/



@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.css']
})
export class JokelistComponent implements OnInit {

  //jokes:Object[] ;
  jokes:Joke[] ;
  buttonName:string ;

  constructor() {
    this.jokes = [
        new Joke("What did the cheese say when it looked in the mirror ?",
        "Hello-Me (Halloumi",
        true),
        new Joke("What kind of cheee do you use to disguise a small horse ?",
        "Mask-a-pony(Mascarpone)",true ),
        new Joke("A kid threw a lump of cheddar at me ?",
        "I thought ' That's not very mature'  " ,
        true),
    ];
    this.buttonName="Tell me"
   }

  ngOnInit() {
  }


  toggle(joke){
    if (joke.hidden){
      joke.hidden = false ;
      this.buttonName = "Don't Tell me";
    }
    else {
      joke.hidden = true ;
      this.buttonName = "Tell me";
    }
  }


  addJoke(joke){
    this.jokes.unshift(joke);
  }


}
