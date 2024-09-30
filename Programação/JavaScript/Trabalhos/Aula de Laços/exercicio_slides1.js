let n1 = Number(prompt("Digite um Numero"))
let n2 = Number(prompt("Digite um Numero"))
let n3 = Number(prompt("Digite um Numero"))
let n4 = Number(prompt("Digite um Numero"))
let n5 = Number(prompt("Digite um Numero"))

let soma = n1+n2+n3+n4+n5

while(soma===0){
    console.log("A soma total é:",soma);
    soma = n1+n2+n3+n4+n5;
    soma++;
}
