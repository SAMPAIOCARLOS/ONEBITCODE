let turista = prompt(`Olá turista qual seu nome?`)

let contagem = 0

let cidades = ""

let endwhile = false

let visitouAlguma = prompt(`Você visitou alguma cidade? (sim) / (não)`)

while (endwhile !== true) {

    switch (visitouAlguma.toLowerCase()) {
        case "sim" : let cidade = prompt(`Qual o nome da cidade que você visitou?`)

        contagem++

        cidades += "-" + cidade + "\n"

        visitouAlguma = prompt(`Você visitou mais alguma cidade?`)

        break

        case "não" : alert(`Olá ${turista} \n Você visitou ${contagem} Cidades \n\n Cidades Visitadas \n ${cidades}`)

        endwhile = true
    }

}