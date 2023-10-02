

  
let endwhile = false

while (endwhile !== true) {


    let opcao = Number(prompt(`Escolha uma das opções \n\n 1)biscoito \n 2)Bolacha \n 3)Arroz \n  4)Cheiro verde \n 5)Encerrar`))

    switch (opcao) {

        case 1 : alert(`Você escolheu a opçao 1)biscoito`)

        break

        case 2 : alert(`Você escolheu a opçao 2)bolacha`)

        break

        case 3 : alert(`Você escolheu a opçao 3)arroz`)

        break

        case 4 : alert(`Você escolheu a opçao 4)cheiro verde`)

        break

        case 5 : alert(`Você escolheu sair`)
        alert(`Saindo...`)

        endwhile = true

        break

    
    }

}