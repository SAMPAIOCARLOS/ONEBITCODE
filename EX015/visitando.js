const turista = prompt(`Olá turista, como é seu nome?`)

let VisitouCidade = prompt(`Você já visitou alguma cidade?  (Sim)/(Não)`)

let cidadesVisitadas = '';
let contagem = 0;

while (VisitouCidade.toLowerCase() === "sim") {

   let QualCidade = prompt(`Qual cidade você visitou?`)

   cidadesVisitadas += `\n- ${QualCidade}\n `

   contagem++

   VisitouCidade = prompt(`Você visitou mais alguma cidade?`)
}

alert(`Olá ${turista}! \n \n Você visitou ${contagem} cidades \n \n Cidades visitadas ${cidadesVisitadas}`)