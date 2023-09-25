const turista = prompt(`Olá turista, como é seu nome?`)

let visitouCidade = prompt(`Você já visitou alguma cidade? (sim)/(não)`)

let cidades = ""

let contagem = 0

while (visitouCidade.toLowerCase() === "sim") {

   let qualCidade = prompt(`Qual o nome da cidade visitada?`)

   cidades += `\n-  ${qualCidade}` 

   contagem++
   
   visitouCidade = prompt(`Você visitou mais alguma cidade? (sim)/(não)`)

}

alert(`Olá ${turista} \n\n Você visitou ${contagem} cidades \n\n cidades visitadas ${cidades}`)






