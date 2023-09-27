//Também tem uma função que da pra concatenar duas array e é pela função "concat" veja um EX



let sociedade = ["item1","item2","item3","item4","item5",]

let comunidade = ["item6","item7","item8","item9","item10",]


console.log(sociedade)

console.log(comunidade)

let concatenacao = sociedade.concat(comunidade)

console.log(concatenacao)



//nela também é possivel juntar duas array com diversos dados e atribuir outros dados junto com as duas array



let cidade = ["coroata","são luis","balsas","barrerinhas"]

let bairoo = ["holandeses","coroadinho","penisula","santa rosa"]


console.log(cidade)

console.log(bairoo)

let concatenar = cidade.concat(bairoo, "testando", 459)

//aqui que fui juntado as duas array cidade e bairro com a string "testando" e o number 459

console.log(concatenar)



//também temos como retirar determinado valor e o substituilo por outro valor e isso é feito com o splice 



let elementosRemovidos = concatenar.splice(3,1,"copo de café")

//aqui no splice(3,1,"fabio preto") o tres é onde ele vai começar a trocar os elementos, esse 1 é que ele vai substituir somente 1 elemento e ele sera substituido pela string "copo de café"

console.log(elementosRemovidos)