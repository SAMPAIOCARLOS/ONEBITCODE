

let dinheiro = Number(prompt(`Informe a quantidade de dinheiro disponivel:`))

let valorAmais = 0

let valorAmenos = 0

let opcoes = ""
do {
    
    opcoes = prompt(`Seu saldo disponivel é ${dinheiro} \n\n Escolhas uma das opções: \n 1)Adicionar \n 2)Remover \n 3)Sair `)

    switch (opcoes.toLowerCase()) {
        case "adicionar" : 
         valorAmais = Number(prompt(`Insira quantidade a ser adicionada:`))

          dinheiro += valorAmais

          break

          case "remover" : 
          valorAmenos = Number(prompt(`Insira quantidade a ser removida:`))

         dinheiro -= valorAmenos
        break


    }

} while(opcoes !== "sair") 







