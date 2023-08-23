let nomePersonagem1 = window.prompt("Nome do primeiro personagem")

let poderDeAtaquePersonagem1 = Number(window.prompt(`Informe o poder de ataque do seu primeiro heroi: ${nomePersonagem1}`))

let pontosDeVidaPersonagem1 = Number(window.prompt(`Ìnforme a quantidade de vida do seu heroi: ${nomePersonagem1}`))

let poderDeDefesa = Number(window.prompt(`Informe o poder de defesa do seu heroi: ${nomePersonagem1}`))

let escudo = window.confirm(`Seu heroi possui um escudo`)


let nomePersonagem2 = window.prompt("Nome do segundo personagem")

let poderDeAtaquePersonagem2 = Number(window.prompt(`Informe o poder de ataque do seu segundo heroi: ${nomePersonagem2}`))

let pontosDeVidaPersonagem2 = Number(window.prompt(`Ìnforme a quantidade de vida do seu heroi: ${nomePersonagem2}`))

let poderDeDefesa2 = Number(window.prompt(`Informe o poder de defesa do seu heroi: ${nomePersonagem2}`))

let escudo2 = window.confirm(`Seu heroi possui um escudo`)

if(poderDeAtaquePersonagem1 > pontosDeVidaPersonagem2 | escudo2 === false){
    alert(`A vida do ${nomePersonagem2} era de ${pontosDeVidaPersonagem2} e agora é ${pontosDeVidaPersonagem2 - poderDeAtaquePersonagem1}`)
}if(escudo2 === true){
    alert(`A vida de ${nomePersonagem2} era de ${pontosDeVidaPersonagem2} e agora é de ${pontosDeVidaPersonagem2 - poderDeAtaquePersonagem1 + poderDeDefesa2}`)
}