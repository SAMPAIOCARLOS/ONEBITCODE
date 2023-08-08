let nome = window.prompt("digite seu nome:")

let sobrenome = window.prompt("escreva seu sobrenome:")

let campoDeEstudo = window.prompt("informe seu campo de estudo:")

let anoDeNascimento = window.prompt("insira seu ano de nascimento")

document.write(`Olá ${nome}! <br> <br> seu nome completo é: ${nome} ${sobrenome} <br> <br> seu campo de estudo é: ${campoDeEstudo} <br> <br> e você tem: ${2023 - anoDeNascimento} anos`)

