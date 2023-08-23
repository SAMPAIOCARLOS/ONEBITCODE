const nomeAtacante = window.prompt("Insira o nome do personagem atacante:")

const poderDeAtaque = parseFloat(window.prompt(`Insira o poder de ataque do ${nomeAtacante}`))


const nomeDefensor = window.prompt("Insira o nome do personagem defensor")

let pontosDeVidaDefensor = parseFloat(window.prompt(`Insira os pontos de vida do ${nomeDefensor}`))

const poderDeDefesa = parseFloat(window.prompt(`Insira o poder de defesa do ${nomeDefensor}`))

const escudo = window.prompt(`O ${nomeDefensor} possui um escudo (Sim/Não)`)

let danoCausado = 0

if(poderDeAtaque > poderDeDefesa | escudo === "Não"){
    window.alert(`O dano causado por ${nomeAtacante} foi de ${poderDeAtaque - poderDeDefesa}`)

}else if(poderDeAtaque <= poderDeDefesa){
    window.alert(`O dano causado por ${nomeAtacante} foi de ${danoCausado}`)

}else if(poderDeAtaque > poderDeDefesa && escudo === "Sim"){
    window.alert(`O dano causado por ${nomeAtacante} foi de ${(poderDeAtaque - poderDeDefesa) /2}`)

}

window.alert(`${nomeAtacante} \nPoder de ataque ${poderDeAtaque} \n\n ${nomeDefensor} \nPontos de vida: ${pontosDeVidaDefensor} \nPoder de defesa ${poderDeDefesa} \nPossui escudo: ${escudo}`)