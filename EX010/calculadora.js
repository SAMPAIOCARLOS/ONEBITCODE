window.alert("Gostaria de utilizar a nossa calculadora")

window.alert("Eu posso somar, multiplicar, dividir e subtrair dois valores")

let primeiroValor = Number(window.prompt("Digite seu primeiro valor"))

let segundoValor = Number(window.prompt("Digite seu segundo valor"))

let operador = window.prompt("Escolha um operador aritmetico para realizar a conta")

// let n1 = document.write("")

let resultado1 = primeiroValor + segundoValor
let resultado2 = primeiroValor - segundoValor
let resultado3 = primeiroValor * segundoValor
let resultado4 = primeiroValor / segundoValor

if(operador === "+"){
    window.alert(`O resultado entre ${primeiroValor} e ${segundoValor} é ${resultado1}`)
}
if(operador === "-"){
    window.alert(`O resultado entre ${primeiroValor} e ${segundoValor} é ${resultado2}`)
}
if(operador === "*"){
    window.alert(`O resultado entre ${primeiroValor} e ${segundoValor} é ${resultado3}`)
}
if(operador === "/"){
    window.alert(`O resultado entre ${primeiroValor} e ${segundoValor} é ${resultado4}`)
}
