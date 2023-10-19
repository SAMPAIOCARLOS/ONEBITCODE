function addInput() {
    const ul = document.getElementById('inputs')

    const newli = document.createElement('li')
    newli.className = 'list-item'
    newli.innerText = 'novo input: '

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'teste'
    
    newli.appendChild(newInput)
    ul.appendChild(newli)
    
}


