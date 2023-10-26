const mybutton = document.getElementById('mybutton')
let contador = 0

mybutton.addEventListener('click', () => {
    contador ++
    if(contador > 1){
        alert(`Não há mais carros disponiveis`)
        return
    } 
    fetch('car.json')
    .then((response) => {
        response.json()
        .then((data) => {
            const myul = document.getElementById('myul')
            // const mysection = document.getElementById('mysection')
            // const exibirMais = document.getElementById('exibirMais')
            // const seta = document.querySelector('.seta')
            

            data.map((item) => {
                const newdivli = document.createElement('div')
                newdivli.setAttribute('id', 'testte')

                const newli = document.createElement('li')
                newli.innerHTML = item.marca
                newli.style.display = 'flex'

                myul.appendChild(newdivli)
                newdivli.appendChild(newli)
                
                const newdivseta = document.createElement('div')
                newdivseta.setAttribute('class', 'seta')
               

                

                const removeButton = document.createElement('button')
                removeButton.setAttribute('id', 'removeButton')
                removeButton.innerHTML = '<ion-icon name="power-outline"></ion-icon>'

                newdivli.appendChild(removeButton)
                
                const newExibirMais = document.createElement('button')

                let contagenteste = 0

                newdivseta.addEventListener('click', ()=> {

                    contagenteste ++
                    if(contagenteste > 1) {
                        return
                    }

                    newdivli.style.paddingBottom = '200px'
                    const outra = document.createElement('p')
                    outra.innerHTML = item.modelo
                    newli.style.flexDirection = 'column'
                    newli.appendChild(outra)


                    newdivseta.addEventListener('mouseenter', ()=> {
                        newdivli.style.paddingBottom = '20px'
                    })
                })

                newdivli.addEventListener('mouseenter', ()=> {
                    
                    newExibirMais.setAttribute('id', 'exibirMais')
                    newExibirMais.innerHTML = '<ion-icon name="chevron-down-outline"></ion-icon>'
                    newExibirMais.style.marginLeft = '10px'
                    newExibirMais.style.color = '#fff'

                    newli.appendChild(newdivseta)
                    newdivseta.appendChild(newExibirMais)

                    newExibirMais.addEventListener('mouseenter', ()=> {
                        newExibirMais.style.color = '#fff'
                    })


                    newdivli.addEventListener('mouseout', () => {
                        newExibirMais.style.color = 'transparent'
                    })
                })

                

                // newExibirMais.addEventListener('mouseenter', () => {
                    
                // })
            })
        })
    })
})




// const newseta = document.createElement('div')
//                 newseta.setAttribute('class', 'seta')

//                 newli.appendChild(newseta)

//                 const exibirMais = document.createElement('button')
//                 exibirMais.setAttribute('id', 'exibirMais')
//                 exibirMais.innerHTML = '<ion-icon name="chevron-down-outline"></ion-icon>'

//                 newseta.appendChild(exibirMais)


//                 const removeButton = document.createElement('button')
//                 removeButton.setAttribute('id', 'removeButton')
//                 removeButton.innerHTML = '<ion-icon name="power-outline"></ion-icon>'

//                 newli.appendChild(removeButton)


