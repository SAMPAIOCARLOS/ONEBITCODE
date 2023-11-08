//funções anônimas
//nesse exemplo eu estou atribuindo uma função em uma variavel
//perceba que quando eu coloco a função soma dentro da variavel eu não coloco assim "const operacao = soma()" pq assim eu estaria colocando dentro da variavel o resultado da função

function soma(a,b) {
    return (a + b)
}

const operacao = soma
console.log(operacao(1,2))

//aqui eu coloquei uma função anônima dentro da variavel "subtrair" uma função anônima como o proprio nome já diz é uma função sem nome 
//a função anônima não pode estar no codigo sozinha ela 

const subtrair = function(a,b) {
    return a - b
}


//High-Order Functions

function calcular(a,b, operacao) {
    console.log('realizando uma conta..')
    const resultado = operacao(a,b)
    return resultado
}

function somar(x,y) {
    return x + y
}

calcular(5,5, somar)


function exibirItens(item, indice, array) {
    console.log({item,
                 indice,
                 array
    })
}

let lista = ['colher', 'faca', 'placa','quadro']

for(let i = 0; i < lista.length; i++) {
    exibirItens(lista[i], i, lista)
}

console.log('===========================================================')

//com a função "forEach" que significa "para cada" ou seja para cada item do array
//"ela fala para cada item do array ela chama a função exibirItens"

function exibirAlimentos(alimento, indice, array,){
    console.log({
        alimento,
        indice,
        array,
    })
}

let alimentos = ['banana','laranja','manga','uva','abacaxi']

alimentos.forEach(exibirAlimentos)