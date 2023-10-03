let Imoveis = []

    let option = ''

    let endwhile = false

    while (endwhile !== true) {
    

        option = Number(prompt(`Bem-vindo ao Cadastro de Imóveis. \nTotal de imóveis: ${Imoveis.length}
    \n\n Escolha uma opção: \n1) Novo imóvel \n2) Listar imóveis \n3) Sair`))


    switch (option) {
        case 1 : let imovel = {}
        imovel.proprietário = prompt(`Informe o nome do proprietário:`)
        imovel.quartos = prompt(`Quantos quartos este imovel tem?`)
        imovel.banheiros = prompt(`Quantos banheiros este imovel possui?`)
        imovel.garagem = prompt(`Este imovel possui garagem (sim/não)`)

        let confirmacao = confirm(`Tem certeza que deseja salvar esse imovel? \n\n 
        Proprietario: ${imovel.proprietário} \n total de quartos: ${imovel.quartos} \n total de banheiros: ${imovel.banheiros} \n possui garagem: ${imovel.garagem}`)

        if (confirmacao === true) {

            Imoveis.push(imovel)
            alert(`Imóvel salvo com sucesso!!!`)
        }

        break

        case 2 : for (let i = 0; i < Imoveis.length; i++) {
            alert(`Imovel ${i + 1} \n Proprietario: ${Imoveis[i].proprietário} \n Total de quartos: ${Imoveis[i].quartos} \n Total de banheiros: ${Imoveis[i].banheiros} \n Possui garagem: ${Imoveis[i].garagem}`)
        }

        break

        case 3 : alert(`Você escolheu sair.`)
        alert(`Saindo...`)

        endwhile = true
    }

    }

    