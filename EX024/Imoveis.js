let menu = ['Esport Garden', 'Monte Carlo', 'Distrito']

let endwhile = false

        let nome = ''
        let quantidadeQuartos = ''
        let quantidadeBanheiros =''
        let garagem = ''
        let nomeImovel = ''

let contagem = 0

while (endwhile !== true) {

    let opcao = Number(prompt(`Esse são o total de Imóveis cadastrados \n\n ${menu.join("\n")}  \n\n Escolha uma opção 1)Salvar um Imóvel \n 2)Mostrar todos os imóveis \n 3)Sair`))

    switch (opcao) {
        case 1 :  
         nome = prompt(`Como é seu nome?`)
         nomeImovel = prompt(`Informe o nome do Imovel`)
         quantidadeQuartos = prompt(`Informe a quantidade de quartos:`)
         quantidadeBanheiros = prompt(`Informe a quantidade de Banheiros:`)
         garagem = prompt(`Possui garagem?`)

        menu.push(nomeImovel)

        contagem++

        break

        case 2 : alert(`Olá ${nome}! \n\n Essas são o total de Imoveis cadastrados: \n\n ${menu.join("\n")} \n\n você visitou ${contagem} Imóveis `)

        break

        case 3 : alert(`Você escolheu sair.`)
        alert(`Saindo...`)

        endwhile = true

        
    }
}