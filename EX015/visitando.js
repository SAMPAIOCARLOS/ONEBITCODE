const turista = prompt(`Olá turista, qual seu nome:`)

let VisitouCidade = prompt(`Você ja visitou alguma cidade? (Sim)/(Não)`)

let contagemDeCidades = 0

let CidadesVisitadas = ""

while(VisitouCidade === "Sim"){

   let cidade = prompt(`Qual o nome da cidade que você visitou?`)

   CidadesVisitadas += "-" + cidade 

   contagemDeCidades++

   VisitouCidade = prompt(`Você visitou mais alguma cidade? (Sim) (Não)`)

}

alert(`
   Olá ${turista}!! \n 

   Total de cidades visitadas ${contagemDeCidades} \n 

   Cidades visitadas: ${CidadesVisitadas} \n
   

`)

