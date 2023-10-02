let dinheiro = Number(prompt(`Insira quanto de dinheiro esta disponivel:`))

let endwhile = false


while (endwhile !== true) {

    let opcoes = Number(prompt(`O seu saldo é de ${dinheiro} \n\n Escolha uma das opçoes \n 1)Adicionar 2)Remover 3)Sair`))

    switch (opcoes) {

        case 1 : let valorAmais = Number(prompt(`Insira quanto quer adicionar:`))

        dinheiro +=  valorAmais

        break

        case 2 : let valorAmenos = Number(prompt(`Insira quanto quer remover:`))

        dinheiro -= valorAmenos

        break

        case 3 : alert(`Você escolheu sair...`)

        endwhile = true

    }

}