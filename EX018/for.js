const numero = Number(prompt(`Informe o numero a ser usado na calculadora:`))

let resultado = ""

for (let fator =1; numero <= 20; fator++) {
    resultado += `${numero} x ${fator} : ${numero * fator} \n`

    if (fator === 20) {

        alert(resultado)
    }
}






