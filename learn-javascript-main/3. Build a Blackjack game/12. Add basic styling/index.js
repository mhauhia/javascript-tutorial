let player = {
    name: "Markus",
    chips: 500
}
let hasBlackJack = false
let isAlive = false;
let cards =  [];
let message = "";
let sum = 0;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $500";



function randomCard() {
    let card = (Math.floor( Math.random() * 13) + 1)
    if(card === 1) {
        return 11
    } if(card > 10) {
        return 10 }

    else return card
    
}

function startGame() {
    
    isAlive = true;
    let firstCard = randomCard();
    let secondCard = randomCard();
    cards =  [firstCard, secondCard]
    sum = cards[0] + cards[1];
    renderGame();
    

}

function renderGame() {
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
    
}


let sumText = "Sum: " 
let cardsText = "Cards: "

cardsEl.textContent = cardsText;
for(let i = 0; i < cards.length; i++) {
cardsEl.textContent += cards[i] + " ";
}


sumEl.textContent = sumText + sum;
messageEl.textContent = message;

}


function newCard() {
    if(isAlive && !hasBlackJack)
    {
    let card = randomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame()
}
}