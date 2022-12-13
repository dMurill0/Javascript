let operation = []
function btnPress(num) {
    let numero = num
    operation.push(numero);  
    document.getElementById("valor").value = numero;
    return operation;
}


console.log(operation);