let paciente = prompt(`Olá paciente, como é seu nome?`)

let listaDePacientes = ["carlos", "halleph", "mateus", "joão", "seu zé"]
let endWhile = false;

while(!endWhile) {
    const option = parseInt(prompt(`Ola ${paciente} \n essa é a lista de espera do SUS: \n\n ${listaDePacientes.map((paciente, index) => `${index + 1}º ${paciente}`).join('\n')} Escolha uma da opções 1)Novo paciente \n 2) Consulta paciente \n 3)Sair`))

    switch(option) {
        case 1:

        alert(`Ola ${paciente} o senhor sera direcionado ao final da fila`)

            listaDePacientes.push(paciente)
            
            endWhile = true
            
        break;
    }

}