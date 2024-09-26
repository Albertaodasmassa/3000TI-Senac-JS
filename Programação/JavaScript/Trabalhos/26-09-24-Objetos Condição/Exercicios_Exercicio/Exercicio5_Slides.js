const pessoa={
    nome:"Pedro",
    idade: 20,
    profissão: "Minerador"
}
const pessoa2={
    nome:"Alan",
    idade: 25,
    profissão: "Vendedor"
}
function infopessoa(){
    const res = [pessoa.nome,pessoa.nome.length,pessoa.idade]
    return res
}

console.log(infopessoa(pessoa))
