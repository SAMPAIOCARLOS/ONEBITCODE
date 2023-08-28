const valor = Number(prompt("Insira uma medida em metros:"))

const conversor = prompt("Escolha uma unidade de medida: \n a) milímetro (mm) \n b) centímetro (cm) \n c) decímetro (dm) \n d) decâmetro (dam) \n e) hectômetro (hm) \n f) quilômetro (km)")

switch(conversor){
    case "a": 
    alert(`Seu valor em milímetro é ${valor * 1000} `)
    break
    case "b":
    alert(`Seu valor em centímetro é ${valor * 100}`)
    break
    case "c":
    alert(`Seu valor em decímetro é ${valor * 10}`)
    break
    case "d":
    alert(`Seu valor em decâmetro é ${valor / 10}`)
    break
    case "e":
    alert(`Seu valor em hectômetro é ${valor / 100}`)
    break
    case "f":
    alert(`Seu valor em quilômetro é ${valor / 1000}`)
    break
    default: alert("ESSE VALOR É INVÁLIDO")
}