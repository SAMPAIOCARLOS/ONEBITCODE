const word = prompt(`Insira uma palavra:`)

let palavraInvertida = ""

for (let i = word.length - 1; i >=0; i--) {
    palavraInvertida =+ word[i]
}

if (word === palavraInvertida) {
    alert(`${word} é um polidromo`)
}else {
    alert(`${word} não é um polidromo`)
}