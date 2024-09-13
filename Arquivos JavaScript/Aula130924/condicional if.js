var nota1 = Number (prompt("Sua nota 1",nota1))
var nota2 = prompt("Sua nota 2",nota2)
var nota3 = prompt("Sua nota 3",nota3)

somatotal = (nota1*nota2*nota3)/3
if(
    somatotal <= 7
)
{
console.log("Aluno Aprovado!!")
}
else
{
    console.log("Aluno Reprovado!!")
}
