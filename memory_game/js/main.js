
console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[3];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length !== 2) {
    alert("Select another card.")
	}else if (cardOne <= 1 && cardTwo <= 1) {
	alert("You found a match!")
	} else if (cardOne >= 1 && cardTwo >= 1) {
    alert("You found a match!")
    } else {
   	alert("Sorry, try again.")
    }





console.log("User flipped " + cardOne);
console.log("User flipped " + cardsTwo);
	

