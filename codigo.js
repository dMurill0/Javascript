let count = 0
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
console.log(saveEl);
function cont() {
    count = count + 1
    countEl.textContent = count;
    return count
}

function save() {
    let num = count + " - "
    saveEl.textContent += num
    console.log(num)
    countEl.textContent = 0
    count = 0
}


