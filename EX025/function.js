// // vamos aprender sobre function 
// // uma função pode ser denominado como um bloco de codigos que só é executado  quando é chamado  EX 

// function ola() {
//     alert(`Olá mundo`)

// }

// ola()

// // nesse exemplo esse alert só iria executar quando eu lançasse o nome da função com os parenteses sendo assim a chamando


// //tbm tem como fazer interações com as funções como por exemplo uma função que diz o dobro de um numero

// function num(x) {
//     alert(`O dobro de ${x} é ${x *2}`)
// }

// num(5)

// //Nesse exemplo utilizamos o parametro da function para atribuir x que vai representar um numero 
// // no alert estamos falando que o dobro desse numero é ele mesmo multiplicado por 2, e logo abaixo dizemos que esse numero vale 5

// function dizerNome(nome = 'halleph') {
//     alert(`olá ${nome}`)
// }

// dizerNome('carlão')
// dizerNome()

// //tbm tem como definir um valor padrão para o parametro da function 
// // caso você chame a função pelo nome e não tenha nenhum valor ai ele pega o valor padrão dela 



// //tambem é possivel atribuir quantos parametros quiser e fazer interações

// function soma(a,b){
//     alert(`A soma entre ${a} e ${b} é ${a + b}`)
// }

// soma(5, 2)
// soma(4,8)
// soma(3,2)

// //...

// function subtracao(a,b) {
//     alert(`A subtração entre ${a} e ${b} é ${a - b}`)
// }

// subtracao(5,2)
// subtracao(4,8)
// subtracao(3,2)

// //...

// function multiplicacao(a,b) {
//     alert(`A multiplicação entre ${a} e ${b} é ${a * b}`)
// }

// multiplicacao(5,2)
// multiplicacao(4,8)
// multiplicacao(3,2)

// //...

// function divisao(a,b) {
//     alert(`A divisão entre ${a} e ${b} é ${a / b}`)
// }

// divisao(5,2)
// divisao(4,8)
// divisao(3,2)



// function valores(a,b,c,d,e) {
//     alert(`O resultado da soma dos valores é ${a + b + c + d + e}`)
// }

// valores(5,5,5,5,5)


function usuario(nome, email, senha = '40228922', tipo = 'tal do mula') {
    let usuario = {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo,
    }

    alert(`Olá ${usuario.nome}!! aqui estão seus dados  \n\n nome: ${usuario.nome} \n email: ${usuario.email} \n senha: ${usuario.senha} \n tipo: ${usuario.tipo}`)

}

usuario('carlos', 'sampaiocarlos957@gmail.com')

//agora imagine que você tem uma function com muitos parametros e quer reduzir e deixar o codigo mais organizado

function muitosParametros(pessoa) {
    pessoa.nome
    pessoa.sobrenome
    pessoa.usuario
    pessoa.email
    pessoa.senha
    pessoa.numero

}

const dadosDpessoa = {
    nome: 'carlos',
    sobrenome: 'sampaio',
    usuario: 'flavinDoPeneu',
    email: 'flavindopenu@gmail.com',
    senha: '123456789',
    numero: '864',
}

muitosParametros(dadosDpessoa)






