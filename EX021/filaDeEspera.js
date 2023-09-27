let listaDePacientes = ["carlos", "kauan", "marcos", "fabio", "nicolas", "josé"];

let finalizarWhile = false;

while(finalizarWhile !== true) {
    let opcao = parseInt(prompt(`Olá, essa é lista de espera do SUS: \n\n${listaDePacientes.join("\n")} \n\n escolha uma opção:\n 1)Novo Paciente \n 2)Consulta paciente \n 3)Sair`))

    if (opcao === 1) {
        let nomePaciente = prompt(`Iremos agendar o senhor para o final da lista, como é seu nome?`)
        listaDePacientes.push(`${nomePaciente}`)

        alert(`Olá ${nomePaciente}! essa é a nova lista de pacientes no qual o senhor estara agurdando... \n\n ${listaDePacientes.join("\n")}`)
    } else if (opcao === 2) {
        alert(`O paciente ${listaDePacientes.shift()} saiu para consulta...`)

        alert(`Essa é a nova lista de pacientes: \n\n ${listaDePacientes.join("\n")}`)
    }else if (opcao === 3) {

        alert(`Saindo...`)
    
        finalizarWhile = true
    }
}








