// Try to modify the expression so that we get a range from 1 to 6
let randomNumber = 1 + (Math.floor( Math.random() * 6 ))

console.log(randomNumber)

function rollDice() {
    let randomNumber = 1 + (Math.floor(Math.random()* 6 ))
    return  randomNumber
}

let random = rollDice()
console.log(random);