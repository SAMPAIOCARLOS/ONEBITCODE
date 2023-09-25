let opcoes = ""

do {

         opcoes = prompt(`Escolha uma das 5 opções \n 1) opção1 \n 2) opção2 \n 3) opção3 \n 4) opção4 \n 5) opção5 \n`)

        switch (opcoes.toLowerCase()) {
                case "1": alert(`Você escolheu a opção 1`)

                break
                case "2": alert(`Você escolheu a opção 2`)

                break
                case "3": alert(`Você escolheu a opção 3`)

                break
                case "4": alert(`Você escolheu a opção 4`)

               
        }

} while(opcoes !== "5")