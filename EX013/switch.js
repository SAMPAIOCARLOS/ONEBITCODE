const questao1 = prompt("Qual o nome dado a uma pessoa de pele escura: \n A) Negão\n B) Zé gotinha da petrobras \n C) Fábio")    

switch(questao1){
    case "A":
        document.write("ERRADO")
        break
        case "B":
        document.write("ERRADO")
        break
        case "C":
        document.write("CERTA RESPOSTA")
        break
        default:
            document.write("ESSA ALTERNATIVA NÃO EXISTE")
}