const lightBtn = document.getElementById('lightBtn')
const darkBtn = document.getElementById('darkBtn')
const switchBtn = document.getElementById('switchBtn')



switchBtn.addEventListener('click', ()=> {
    // const body = document.body
    // body.classList.toggle('is-light')
    // body.classList.toggle('is-dark')
    // if(body.classList.contains('is-dark')){
    //     body.classList.remove('is-dark')
    // }else{
    //     body.classList.add('is-dark')
    // }

    document.body.classList.toggle('default-theme')
})