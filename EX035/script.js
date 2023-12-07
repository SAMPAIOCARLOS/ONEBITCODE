// um jeito de fazer a Desestruturação de um objeto é pelo metodo 
const person = {
    name: "carlinhos",
    age: 18,
    job: "programmer"
}

const nome = person.name
const idade = person.age
const profissao = person.job

// em vez de criar uma variavel para cada chave do objeto, a Desestruturação pode ser feita desse modo 

const person2 = {
    name: "fabinho",
    age: 18,
    job: "programmer"
}

const {name, age, job} = person2

console.log(name) //será atribuido a um obj as chaves de um objeto e estara em formato de variavel


//agora fazendo a Desestruturação de um array

const person3 = {
    Name: "carlinhos",
    Age: 18,
    Job: "programmer",
    Parent: ["sampaio", 'silva']
}

const {Parent} = person3

const [pai, mae] = Parent

console.log(mae)

//

const id = Math.floor(Math.random() * 10000) // criação de um id aleatorio 

console.log(id)









