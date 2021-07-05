// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
let firstCard = 2;
let secondCard = 6;
let sum = firstCard + secondCard +15;
let isAlive = true;
let message = "";

if (sum <= 20) {
    message = "Do you want to draw a new card?";
        
} else if (sum === 21) {
    message = "Blackjack!"
    

} else {
    
    message = "You're out of the game";
    isAlive = false;
    console.log(isAlive);
}

console.log(message);