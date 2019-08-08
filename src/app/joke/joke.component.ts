import { Component, OnInit, Input } from '@angular/core';
import {Joke} from '../joke/joke'

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  //setup: string ;
  //punchline: string ;
  @Input() joke:Joke ;

  constructor() {
    //this.setup = "What did the cheese say when it looked in the mirror?";
    //this.punchline = "Halloumi (Hello Me)" ;
   }

  ngOnInit() {
  }

}
