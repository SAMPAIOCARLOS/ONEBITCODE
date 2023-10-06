//TRIANGULO

let valorBaseDoTriangulo = document.getElementById('valorBaseDoTriangulo')
let valorAlturaDoTriangulo = document.getElementById('valorAlturaDoTriangulo')
let calcularTriangulo = document.getElementById('calcularTriangulo')
let resultadoTriangulo = document.getElementById('resultadoTriangulo')

calcularTriangulo.addEventListener('click', function() {
    resultadoTriangulo.innerHTML = Number(valorBaseDoTriangulo.value) * Number(valorAlturaDoTriangulo.value) / 2
})

//RETANGULO

let valorBaseDoRetangulo = document.getElementById('valorBaseDoRetangulo')
let valorAlturaDoRetangulo = document.getElementById('valorAlturaDoRetangulo')
let calcularRetangulo = document.getElementById('calcularRetangulo')
let resultadoRetangulo = document.getElementById('resultadoRetangulo')

calcularRetangulo.addEventListener('click', () => {
    resultadoRetangulo.innerHTML = Number(valorBaseDoRetangulo.value) * Number(valorAlturaDoRetangulo.value)
})

//QUADRADO 

let valorDoLado = document.getElementById('valorDoLado')
let calcularQuadrado = document.getElementById('calcularQuadrado')
let resultadoQuadrado = document.getElementById('resultadoQuadrado')

calcularQuadrado.addEventListener('click', () => {
    resultadoQuadrado.innerHTML = Number(valorDoLado.value) * Number(valorDoLado.value)
})

//TRAPEZIO

let valorBaseMaior = document.getElementById('valorBaseMaior')
let valorBaseMenor = document.getElementById('valorBaseMenor')
let valorDaAlturaDoTrapezio = document.getElementById('valorDaAlturaDoTrapezio')
let calcularTrapezio = document.getElementById('calcularTrapezio')
let resultadoTrapezio = document.getElementById('resultadoTrapezio')

calcularTrapezio.addEventListener('click', () => {
    resultadoTrapezio.innerHTML = ((Number(valorBaseMaior.value) + Number(valorBaseMenor.value)) * Number(valorDaAlturaDoTrapezio.value) / 2).toFixed(2)
})

//CIRCULO

let valorDoRaio = document.getElementById('valorDoRaio')
let calcularCirculo = document.getElementById('calcularCirculo')
let resultadoCirculo = document.getElementById('resultadoCirculo')

calcularCirculo.addEventListener('click', () => {
    resultadoCirculo.innerHTML = (Number(valorDoRaio.value) * Number(valorDoRaio.value))  * 3.14
})

// document.querySelector('form').addEventListener('submit', (event) => {
//     event.preventDefault()
// })  isso serve para tirar a função de determinado elemento

