let bixo = Number(prompt("Quantos bixos de estimação voce tem?"))
let array = [""]

if(bixo===0){
console.log("Que pena! Você pode adotar um pet!")
} else{
for(let i =0; i<=bixo; i++){
     nome = prompt("Qual o nome do bixo de pelucia")
     array.push(nome)
}
}



