//nos eventos do dom existe o onMouseEnter que tem praticamente o mesmo efeito do hover no css 

function hover() {
    alert(`efeito hover`)
}

//também exeite o onchange que significa quando mudar o valor ele só vai ser acionado somente quando o valor for trocado 

function AlterarValor() {
    alert(`Você mudou o valor desse elemento!`)
}

//o evento onfocus é ativado quando algum elemento está no foco, por EX o input quando vc clica dentro dele pra colocar algum valor, quando se faz isso ele fica no foco

function focou() {
    alert(`Este elemento foi selecionado e esta no foco!`)
}

//já esse o onblur é basicamnete o contrario do onfocus, ele só é ativado quando determinado elemento como o input sai de foco

function antiFoco() {
    alert(`Esse elemento saiu do foco!`)
}

//já esse do click é ativado quando você clica em algum elemento

function clicou() {
    alert(`Você clicou no botão!!`)
}

