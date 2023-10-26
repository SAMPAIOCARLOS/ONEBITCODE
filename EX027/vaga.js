let lista = ['Listar vagas disponíveis', 'Criar um nova vaga', 'Visualizar uma vaga', 'Inscrever um candidato em uma vaga', 'Excluir uma vaga', 'Sair'] 

let vagas = []

let endwhile = false

let candidatos = 0

do{
    let option = Number(prompt(`Bem vindo ao nosso sistema de vagas!! \n Essas são as vagas disponiveis ${vagas.length} \n\n Opções disponiveis: \n ${lista.map((str, index) => `${index + 1}º :${str}`).join("\n")}`))

    switch(option) {
        case 1 : if(vagas.length === 0) {
            alert(`Não a vagas disponiveis..`)
        } else {
            
        }

        endwhile = true
    }
}while(endwhile !== true)
    



    
    
      
