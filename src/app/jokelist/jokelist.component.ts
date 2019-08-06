import { Component, OnInit } from '@angular/core';
import {Joke} from '../joke/joke'
@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.css']
})
export class JokelistComponent implements OnInit {

  jokes:Object[] ;
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


}
