//High-Order Functions e Arrays
//conhecendo algumas funções para se trabalhar com array

const personagens = [
    { nivel: 42, nome: "thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

 
//metodo pelo for para percorrer cada item do array de obj

  const Nomes = []

  for(let i = 0; i < personagens.length; i++) {
    Nomes.push(personagens[i].nome)
  }

  console.log(Nomes)

//metodo pelo map

  const nivel = []

  personagens.map((num)=> {
    nivel.push(num.nivel)
  })

  console.log(nivel)

//metodo pelo map mais limpo

const racas = personagens.map((raca)=> {
    return raca.raca
})

console.log(racas)


//imprimindo somente personagens com a raca "orc"

const Orcs = []

for (let i = 0; i < personagens.length; i++) {
    if(personagens[i].raca === 'Orc') {
        Orcs.push(personagens[i])
    }
    
}
console.log(Orcs)

//imprimindo somente personagens seres humanos

const Humano = []

for (let i = 0; i < personagens.length; i++) {
    if(personagens[i].raca === 'Humano') {
        Humano.push(personagens[i])
    }
}

console.log(Humano)


//fazendo pelo metodo filter

const orcs = personagens.filter((raca)=> {
    return raca.raca === 'Orc'
})

console.log(orcs)




