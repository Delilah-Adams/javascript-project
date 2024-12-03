const $ = (selector) => document.querySelector(selector);

function resetPlayer(){
    $("#player-1").style.boxShadow = "none";
    $("#player-2").style.boxShadow = "none";
}

function order() {
    resetPlayer();
  let randomOrder = Math.random();
  let currentPlayer = randomOrder < 0.5 ? "#player-1" : "#player-2";
 $(currentPlayer).style.boxShadow = "0 0 5px 5px aliceblue";
}

function press(event){
   event.target.style.borderLeft="none";
   event.target.style.borderTop="none";

}

function release(event){
    event.target.style.border="3px solid rgb(45, 45, 45)";
}
$("#start").addEventListener("click", order);
$("#start").addEventListener("mousedown", press);
$("#reset").addEventListener("mousedown", press);
$("#start").addEventListener("mouseup", release);
$("#reset").addEventListener("mouseup", release);

// Card Management (Eric)

/*

These classes set up the deck and the cards. The deck element also has attributes for both the type
and suit, so it's easier to keep track of which card is which.

*/

class Card {

    constructor(suit, type){

        this.suit = suit;
        this.type = type;

    }

}

class Deck {

    constructor() {
        
        this.deck = [];

        const types = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
        const suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
        let i = 0


        for (let suit in suits) {

            for (let type in types) {

                this.deck.push(new Card(suits[suit], types[type]));

                i++

            }

        }


    }

}                

const playingDeck = new Deck();

/* 

This will shuffle the deck from before, so we can pop a random
card from the end of the deck after it's been shuffled. 

Otherwise if you try to pop a card, it'll always pop the same card from the end of the deck.

The shuffle algorithm will shuffle the 'playingDeck.deck' array.
Don't forget arrays start from zero, so the final card in the deck is 51, and the first is 0.


*/

function getShuffledDeck() {

    for (let i = playingDeck.deck.length - 1; i > 0; i--) {

        let s = Math.floor(Math.random() * (i + 1));

        let loopTemp = playingDeck.deck[i];

        playingDeck.deck[i] = playingDeck.deck[s];

        playingDeck.deck[s] = loopTemp;
    }


}

// Point Tracking Code

/*

This will be for tracking the actual scoring of points, betting, and similar.

*/

function initializePoints() {

    const defaultPoints = 1000;
    let playerOnePoints = defaultPoints;
    let playerTwoPoints = defaultPoints;
    
};

//End (Eric)