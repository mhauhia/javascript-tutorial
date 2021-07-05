let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

console.log(countEl);
function incrementCount() {
    count += 1;
    countEl.innerText = count;
    console.log(countEl);
}

function save() {
    let passengers = count + " - ";
    saveEl.textContent += passengers;
    console.log(passengers);
    count = 0;
    countEl.innerText = "0";
}

