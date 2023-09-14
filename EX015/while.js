let velocidade = 100

while(velocidade > 0){
    alert(`A velocidade do seu carro é ${velocidade}`)
    velocidade -= 10

    if(velocidade === 40){
        break
    }
}
alert("o carro parou")