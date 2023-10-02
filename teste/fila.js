let lista = ["carlos", "halleph", "nicolas", "joao", "abraao"]

let endwhile = false

while (endwhile !== true) {
    let opcao = Number(prompt(`Essa é a lista de pacientes do SUS \n\n ${lista.join("\n")} \n\n Escolha entre as opções \n 1)Novo paciente \n 2)Consultar paciente \n 3)Sair`))

    switch (opcao) {

        case 1 : let paciente = prompt(`Informe o nome do paciente a ser consultado`)

        lista.push(paciente)

        alert(`Essa é sua colocação na lista de espera \n ${lista.join("\n")}`)

        break

        case 2 : alert(`O paciente ${lista[0]} saiu para consulta..`)

        lista.shift()

        alert(`Essa é a lista de pacientes \n ${lista.join("\n")}`)

        break

        case 3 : alert(`Você escolheu sair...`)
        
        endwhile = true
    }
}