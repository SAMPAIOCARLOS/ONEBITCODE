const num = Number(prompt(`Informe o numero a ser multiplicado`))

let resultado = ""

for (let fator = 0; num <= 19; fator++) {
    resultado += `${num} x ${fator + 1} :${num * (fator + 1)}\n`

    if (fator === 19) alert(resultado)
}

