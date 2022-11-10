
let countHome = 0
let countAway = 0
let scoreHome = document.getElementById("home-score")
let scoreAway = document.getElementById("away-score")
function add1H() {
    countHome += 1
    scoreHome.textContent = countHome
}
function add1A() {
    countAway += 1
    scoreAway.textContent = countAway
}
function add2H() {
    countHome += 2
    scoreHome.textContent = countHome
}
function add2A() {
    countAway += 2
    scoreAway.textContent = countAway
}
function add3H() {
    countHome += 3
    scoreHome.textContent = countHome
}
function add3A() {
    countAway += 3
    scoreAway.textContent = countAway
}