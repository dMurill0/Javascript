let firstCard = Math.floor(Math.random(2) * 11);
let secondCard = Math.floor(Math.random(2) * 11);
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let mensaje = ""
let mensajeEl = document.getElementById("mensaje-el")
let suma = document.getElementById("suma")
console.log(mensajeEl);

function startGame() {
    if (sum < 21) {
        mensaje = "Quieres otra carta?";
        // let card = Math.floor(Math.random(2) * 11);
        // sum += card;
        suma.textContent = "Suma: " + sum;
        console.log(sum);
    } else if (sum === 21) {
        suma.textContent = "Suma: " + sum;
        mensaje = "BlackJack!!";
        hasBlackJack = true;
    } else {
        suma.textContent = "Suma: " + sum;
        isAlive = false;
        mensaje = "Lo siento, ha sobrepasado el límite";
    }
    mensajeEl.textContent = mensaje;

}

// console.log(sum);
// console.log("sigue vivo?: " + isAlive);
// console.log("has hecho 21?: " + hasBlackJack);
// console.log(mensaje);