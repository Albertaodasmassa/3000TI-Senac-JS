let cidade = prompt("Selecione a cidade para cadastrar o Abrigo: ")

switch(cidade){
  case '1':
  console.log('Sao Leopoldo')
  break
  case '2':
  console.log('Sapiranga')
  break
  case '3':
  console.log('Canoas')
  break
  case '4':
  console.log('Porto Algre')
  break
  case '5':
  console.log('Viamao')
  break
  default:
  console.log('Cidade não cadastrada: Gostaria de cadastrar?')
  break
}

 let abrigocad={
  nomeabri: prompt("Qual e o nome do abrigo? "),
  cidade:  prompt("Qual e o nome da cidade do abrigo? "),
  numero: prompt("Qual e o numero do abrigo?  "),
  endereco: prompt("Qual e o endereço da cidade?  ")

}
console.log("Novo abrigo Cadastrado com sucesso: ",abrigocad.nomeabri)
console.log("Nova Cidade cadastrada com sucesso",abrigocad.cidade)
console.log("Novo do abrigo cadastrado",abrigocad.numero)
console.log("Novo endeço de abrigo cadastrado com sucesso: ",abrigocad.endereco)

let abigoinfo={
    ...abrigocad
}
console.log(`Os abrigos cadastrados são ${abrigocad.nomeabri}`)
console.log(`Os abrigos cadastrados são ${abrigocad.cidade}`)
console.log(`Os abrigos cadastrados são ${abrigocad.numero}`)
console.log(`Os abrigos cadastrados são ${abrigocad.endereco}`)







