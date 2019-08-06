export class Joke{
    setup:string;
    punchline:string ;
    hide:boolean ;
    buttonName:string ;


    constructor(setup:string, punchline:string, hide:boolean){
        this.setup = setup ;
        this.punchline = punchline ;
        this.hide = hide ;
        this.buttonName = "Show";
    }

    toggle(joke:Joke){
        if (joke.hide){
          joke.hide= false ;
          this.buttonName = "Don't Tell me";
        }
        else {
          joke.hide = true ;
          this.buttonName = "Tell me";
        }
      }
}