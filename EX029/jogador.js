let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let input3 = document.getElementById('input3')


const Escalar = document.getElementById('Escalar')

Escalar.addEventListener('click', ()=> {

    let confirmacao = confirm(`Deseja escalar esse jogador?`)
    if(confirmacao) {
        
        const position = document.getElementById('position')
        position.innerHTML = input1.value
        position.style.display = 'block'

        const name = document.getElementById('name')
        name.innerHTML = input2.value
        name.style.display = 'block'

        const num = document.getElementById('num')
        num.innerHTML = input3.value
        num.style.display = 'block'

        input1.value = '' 
        input2.value = '' 
        input3.value = '' 
        
    }
})