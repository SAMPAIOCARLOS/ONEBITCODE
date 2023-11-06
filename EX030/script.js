const buttonAdd = document.getElementById('buttonAdd')


buttonAdd.addEventListener('click', ()=> {
    let nomeDesenvolvedor = document.getElementById('nomeDesenvolvedor')
    let valor = nomeDesenvolvedor.value

    if(valor === '') {
        alert(`campo obrigatorio`)
        return
       
    }else{
        const form = document.getElementById('form')
        
        const newlabel = document.createElement('label')
        newlabel.setAttribute('for', 'nomeTech')
        newlabel.innerHTML = '<label for="nomeTech">nome da tecnologia</label>'

        const newinput = document.createElement('input')
        newinput.setAttribute('type', 'text')
        newinput.setAttribute('id', 'nomeTech')
        
        form.appendChild(newlabel)
        form.appendChild(newinput)

        const container = document.createElement('div')
        container.setAttribute('id', 'container')

        form.appendChild(container)

        const newh3 = document.createElement('h3')
        newh3.innerText = 'tempo de experiência'

        container.appendChild(newh3)
        

        
    }

    
    nomeDesenvolvedor.value = ''
})
