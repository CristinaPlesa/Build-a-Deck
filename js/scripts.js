$(document).ready(function() {
  const numbers = ["Ace of ", "2 of ", "3 of ", "4 of ", "5 of ", "6 of ", "7 of ", "8 of ", "9 of ", "10 of ","Jack of ", "Queen of ", "King of "];
  const suits = ["Clubs", "Spades", "Diamonds", "Hearts"];
  suits.forEach(function(suit) {
    numbers.forEach(function(number) {
    const cardName = number.concat(suit);

    $(".display").append(cardName);
  });
});

});
