let nomePersonagem1 = window.prompt("Insira o nome do seu primeiro heroi:")

let poderDeAtaquePersonagem1 = Number(window.prompt(`Insira o pode de ataque do seu primeiro heroi: ${nomePersonagem1}`))

let nomePersonagem2 = window.prompt("Insira o nome do seu segundo heroi:")

let pontosDeVidaPersonagem2 = Number(window.prompt(`Insira a quantidade de pontos de vida do seu segundo heroi`))

let poderDeDefesa2 = Number(window.prompt(`Insira o poder de defesa do seu segundo heroi`))

let escudo2 = window.confirm("Seu heroi possui um escudo?")

if(poderDeAtaquePersonagem1 > poderDeDefesa2 || escudo2 === false){

    window.alert(`O total de dano causado por: ${nomePersonagem1} foi de ${poderDeAtaquePersonagem1 - poderDeDefesa2}`)

}if(escudo2 === true){
    window.alert(`O total de dano causado por: ${nomePersonagem1} foi de ${poderDeAtaquePersonagem1 - poderDeDefesa2}`)
}

let resultado = poderDeAtaquePersonagem1 - poderDeDefesa2

window.alert(`A vida do ${nomePersonagem2} era de ${pontosDeVidaPersonagem2} e agora é ${pontosDeVidaPersonagem2 - resultado}`)