const input1 = document.getElementById('input1')
const input2 = document.getElementById('input1')
const input3 = document.getElementById('input1')

function escalar() {

    let option = prompt(`Deseja salvar as informações desse jogador? \n\n Posição do jogador: ${input1.value} \n Nome do jogador: ${input2.value} \n Numero da camisa: ${input3.value} \n (sim/não)`) 
    
    switch(option.toLowerCase()) {
        case 'sim':
            const lista = document.getElementById('lista')
            const newUl = document.createElement('ul')
            const newLi = document.createElement('li')
            newLi.innerText = `Posição:${input1.value}`
            newLi.innerText = `Nome: ${input2.value}`
            newLi.innerText = `numero camisa: ${input3.value}`

            lista.appendChild(newUl)
            newUl.appendChild(newLi)
            // newLi.appendChild(input1.value)

    }

}