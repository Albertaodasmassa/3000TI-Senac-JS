const nome = prompt("Qual é seu nome?")
const corfav = prompt("Qual e sua cor favorita?")
const frase1 = "Seu nome é:"+nome
const frase2 = "Sua cor favorita é:"+corfav
const frase3 = `Seu nome é${nome}`
const frase4 = `Sua cor favorita é:${corfav}`
const frase5 = prompt("Por favor Digite Uma frase!!")
const frasemini = frase5.toLowerCase()
const frase6 = frasemini .replaceAll("o","i")
const frase7 = frasemini
const numero = Number(prompt("Por favor Insira uma numero de 0 a 4"))
const raca = ["dog","dog2","dog3","dog4","dog5"]

const racanum = numero + raca 
const arrays = [1,2,3,4,5,6]
arrays.push(7)
const arrays2 = arrays.splice(4,5)


console.log(frase1)
console.log(frase2)
console.log(frase3)
console.log(frase4)
console.log(frase5)
console.log(frasemini)
console.log(frase6)
console.log(frase7.length)
console.log("A Raça Numero é:",racanum)
console.log(arrays.length)

