let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let input3 = document.getElementById('input3')


const Escalar = document.getElementById('Escalar')

Escalar.addEventListener('click', ()=> {

    let confirmacao = confirm(`Deseja escalar esse jogador?`)

    if(confirmacao) {
        const list = document.getElementById('list')

        const position = document.createElement('li')
        position.innerHTML = input1.value
        list.appendChild(position)
        const name = document.getElementById('li')
        name.innerText = input2.value
        list.appendChild(name)
        const number = document.getElementById('li')
        number.innerText = input3.value
        list.appendChild(number)
        
        
        
        
    }
})