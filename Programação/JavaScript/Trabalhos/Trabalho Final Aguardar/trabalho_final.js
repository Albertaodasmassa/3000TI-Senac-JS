let cidade = prompt("Selecione uma opcao/ cadastrar abrigo /listar abrigo/Procurar Abrigo: ")
function cadfun(cidade){
    console.log("======================================")
    let nomecid = prompt("Qual e o nome da cidade que gostaria de cadastrar ?")
    let enderecocid = prompt("Qual e endereco da cidade que gostaria de cadastrar? ")
    console.log("Cidade Cadastrada com sucesso:",nomecid)
    console.log("Endereço cadastrado com sucesso:",enderecocid)
    console.log("====================================")
}
switch(cidade){
  case 'cadastrar abrigo':
  console.log('Gostaria de cadastrar um Novo Abrigo?')
  cadfun(cidade)
  break
  case 'listar Abrigo':
  console.log('Gostaria de Listar os abrigo existentes?')
  abri(cidade)
  break
  case 'procurar':
  console.log('Gostaria de Procurar os abrigos existentes')
  break
  default:
  console.log('Sair')
  break
}


const abrigos ={
nomeabg : [""]
}

function abri(abrigo){
    const resabrigo = [abrigos.nomeabg]
}
console.log(abri(abrigos))


