let numero = Number(prompt(`Insira um numero para começar:`))

let resultado = 0

for (let i = 0; i <= 20; i++) {

resultado += `${numero} x ${i} : ${numero * i} \n`

if (i === 20) {
    alert(resultado)
}

}