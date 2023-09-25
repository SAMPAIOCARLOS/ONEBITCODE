let listaDeCompras = []



listaDeCompras[0] = "arroz"

console.log(listaDeCompras)

listaDeCompras[1] = "cuzcus"

console.log(listaDeCompras)

listaDeCompras[2] = "feijão"

console.log(listaDeCompras)

listaDeCompras[3] = "batata"

console.log(listaDeCompras)

listaDeCompras[4] = "carne"

console.log(listaDeCompras)

console.log(listaDeCompras[6])


//aqui aprendemos a atribuir elementos nos array quando o array está sem nada

//mas caso voce queira atribuir um elemento no final de uma array que já tem elementos e voce queira adicionar mais é usando o "push" assim

let arr = ["item1", "item2", "item3", "item4", "item5"]

console.log(arr)

arr.push("bora bill")
arr.push("bora fi do bil")
arr.push("bora mulher do bill")
arr.push("bora homem do bil")

//o push é pra add um elemento na array no final dela. 
//lembrendo que na hora de add pode ser qualquer tipo de elemento, string ou number 

console.log(arr)


//tambem tem como add elementos na array pelo começo e é pela função "unshift" ela é a mesma pegada do push mais é adicionado pelo começo. EX

let arrayUnshift = ["item10", "item20", "item30", "item40", "item50"]

console.log(arrayUnshift)

arrayUnshift.unshift("testando")

console.log(arrayUnshift)


//também é possivel remover elementos no array nesse caso no final do array com a função pop,  

//ela basicamente vai pegar o ultimo elemento da array e removelo e depois vai mostrar ele EX

const arrayPop = ["item10", "item20", "item30", "item40", "item50"]

let ultimoElemento = arrayPop.pop()

arrayPop.pop()

console.log(arrayPop)

console.log(ultimoElemento)


//e também é possivel remover um elemento no começo da array com a função "shift",

//é basicamente a mesma coisa das coisa anteriores EX

let arrayshift = ["item10", "item20", "item30", "item40", "item50"]

let primeiroElemento = arrayshift.shift()

arrayshift.shift()
console.log(arrayshift)

console.log(primeiroElemento)


//e também tem a função includes que serve para verificar se um determinado elemeto está presente na array  EX

let arrayNomes = ["carlos", "halleph", "leonardo", "guilherme"]

console.log(arrayNomes)

let inclui = arrayNomes.includes("halleph")

console.log(inclui)

//e também existe a função indexOf que serve para dizer em qual posição o seu elemento está EX 

let indice = arrayNomes.indexOf("leonardo")

console.log(indice)



