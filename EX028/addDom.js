function addTexto() {
    const div1 = document.querySelector('.div1')
    const section1 = document.querySelector('.section1')

    const newp = document.createElement('p')
    newp.style.fontSize = '20px'
    newp.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quisquam dolores? Quo unde animi assumenda aliquid quisquam modi reprehenderit corporis placeat sint, mollitia fuga repudiandae in voluptatum veniam fugit aut.'

    div1.appendChild(section1)
    section1.appendChild(newp)
    
}