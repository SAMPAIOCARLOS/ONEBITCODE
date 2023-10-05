const lista = ['área do triângulo: base', 'área do retângulo', 'área do quadrado', 'área do trapézio', 'área do círculo', 'Sair']


function areaTriângulo() {
    const base = Number(prompt(`Informe a base:`))
    const altura = Number(prompt(`Informe a altura`))

    return (base * altura) / 2
}

function areaRetangulo() {
    const base = Number(prompt(`Informe a base:`))
    const altura = Number(prompt(`Informe a altura`))

    return (base * altura)
}

function areaQuadrado() {
    const lado = Number(prompt(`Informe a base:`))
    
    return lado * lado
}

function areaTrapezio() {
    const baseMaior = Number(prompt(`Informe a base maior:`))
    const baseMenor = Number(prompt(`Informe a base menor:`))
    const altura = Number(prompt(`Informe a altura`))

    return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo() {
    const raio = Number(prompt(`Informe o valor do raio`))
    const raioaoQuadrado = raio * raio
    return raioaoQuadrado * 3.14
}


let endwhile = false  

while(endwhile !== true) {

    let option = Number(prompt(`Bem vindo a nossa calculadora geométrica!! \n\n Essa é a lista de opções que temos disponiveis \n\n ${lista.map((str, index) => `${index + 1}º :${str}`).join("\n")}  \n\n Escolha uma opção para prosseguir...`))

    switch(option) {
        case 1 : 
            let resultadoTriangulo = areaTriângulo()

        alert(`A área do triângulo de acordo com os dados repassados é "${resultadoTriangulo}"`)

        break

        case 2:
            let resultadoRetangulo = areaRetangulo()

        alert(`A área do Retângulo de acordo com os dados repassados é "${resultadoRetangulo}"`)

        break

        case 3:
            let resultadoQuadrado = areaQuadrado()

        alert(`A área do Quadrado de acordo com os dados repassados é "${resultadoQuadrado}"`)    

        break

        case 4:
            let resultadoTrapezio = areaTrapezio()

        alert(`A área do Trapezio de acordo com os dados repassados é "${resultadoTrapezio}"`)  
        
        break

        break

        case 5:
            let resultadoCirculo = areaCirculo()

        alert(`A área do Círculo de acordo com os dados repassados é "${resultadoCirculo}"`)    

        break

        case 6:
            alert(`Você escolheu sair.`)
            alert(`Saindo...`)

            endwhile = true

            break
            

        default: 
        alert(`Valor invalido`)

    }

    

}


// .map((str, index) => `${index + 1}º :${str}`).join("\n")

        
          
      