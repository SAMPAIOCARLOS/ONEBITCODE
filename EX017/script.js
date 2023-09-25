let dinheiro = Number(prompt(`Insira o total de dinheiro disponivel:`))

let opcoes = ""

let valorAMais = 0

let valorAMenos = 0

do {
    opcoes = prompt(`Seu saldo: ${dinheiro} \n \n agora escolha uma das opções  1) Aumentar dinheiro \n 2) Remover dinheiro 3)Sair `)


    switch (opcoes.toLowerCase()) {
        case "aumentar": valorAMais = Number(prompt(`Quanto você deseja aumentar?`))

        dinheiro += valorAMais

       prompt(`Seu saldo: ${dinheiro} \n \n agora escolha uma das opções  1) Aumentar dinheiro \n 2) Remover dinheiro 3)Sair`)
        break


        case "remover dinheiro": valorAMenos = Number(prompt(`Informe quanto você deseja diminuir`))

        dinheiro -= valorAMenos

        prompt(`Seu saldo: ${dinheiro} \n \n agora escolha uma das opções  1) Aumentar dinheiro \n 2) Remover dinheiro 3)Sair`)
        break

        case "sair": alert(`Você escolheu sair`)
        break

        default: alert(`Valor invalido`)

        break
    }


    
} while (opcoes !== "sair") {

    
}








