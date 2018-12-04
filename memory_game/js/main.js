
console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];
cardsInPlay.push(cards[cardId]);
var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]){
	console.log("You found a match!");
    } else {
   	console.log("Sorry, try again.");
    }
var flipCard = function (cardId) {
	var cardId = (cards[cardId])
	console.log("User fliped " + cards[cardId])
flipcard(0);
flipcard(1);
    if (cardsInPlay.length === 2) {
    	checkForMatch();
    }

  }
}






