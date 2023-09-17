import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent { 
  // Repersents the 9 moves on the game board
  // Array of Strings
  squares: any[];
  
  //This will help determine the current player 
  xIsNext: boolean; 
  
   //Either X or O
  winner: String;

  constructor(){
    
    // This runs when the component is created
    // Generally you dont do anything in the constructor
    // Inject Depenecies
  }

  ngOnInit(){
    //LifeCyclehook
    //Used for setup

    this.newGame();

  }

  //We will use this method to set up our games values 
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null; 
    this.xIsNext = true;
  }

  //We want to compute a property based one a piece of data that changes 
  
  get player(){
    // When ever the 'xIsNext' property changes we will return X or O 
    // And be reflected in the UI 
    //If the true return X
    //If false return O
    return this.xIsNext ? 'X' : 'O';
  } 


  //Click Event on button
  makeMove(idx: number){

    //On Click Event
    //Check index in the array (which square)
    //If its already been clicked do nothing (Sqaures can only be clicked once)
     
    if(!this.squares[idx]){
      //If its empty or null 
      //   splice index of clicked sqaure with the current player
      this.squares.splice(idx, 1, this.player);

      //Toggle xIsNext to oppiste value using '!'
      this.xIsNext = !this.xIsNext;

    }
    this.winner = this.calculateWinner();

    
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

}
