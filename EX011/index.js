let primeiroVeiculo = window.prompt("Digite o nome do primeiro Veículo")

let segundoVeiculo = window.prompt("Digite o nome do segundo veículo")

let velocidadeP = Number(window.prompt("Informe a velocidade do primeiro veículo"))

let velocidadeS = Number(window.prompt("Informe a velocidade do segundo veiculo"))


if (velocidadeP === velocidadeS){
    window.alert(`A VELOCIDADE DOS DOIS VEÍCULOS SÃO IGUAIS `)
    
    Document.window(`A VELOCIDADE DO ${primeiroVeiculo} e do ${segundoVeiculo} SÃO A MESMA!`)
    
}

if (velocidadeP > velocidadeS) {
    window.alert(`O ${primeiroVeiculo} é mais rápido que o ${segundoVeiculo}`)

    document.write(`${primeiroVeiculo} CAMPEÃO`)
} else {
    window.alert(`O ${segundoVeiculo} é mais rápido que o ${primeiroVeiculo}`)

    document.write(`O ${segundoVeiculo} é CAMPEÃO`)
}
