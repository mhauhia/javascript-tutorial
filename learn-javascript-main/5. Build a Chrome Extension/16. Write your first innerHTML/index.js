// Use .innerHTML to render a Buy! button inside the div container
let container = document.getElementById("container");
container.innerHTML = "<button onclick='buy()'>" + "Buy!" + "</button>"

function buy() {
container.innerHTML += "<div>" + "Thank you for your purchase!" + "</div>"
}