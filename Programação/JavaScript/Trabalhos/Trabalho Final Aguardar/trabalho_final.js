let cidade = prompt("Selecione uma opcao|cadastrar abrigo |listar abrigo|Procurar Abrigo|: ")
function cadfun(cidade){
    console.log("======================================")
    let nomecid = prompt("Qual e o nome da cidade que gostaria de cadastrar ?")
    let enderecocid = prompt("Qual e endereco da cidade que gostaria de cadastrar? ")
    let telefone = Number(prompt("Qual e o telefone do abrigo?"))
    let lotacao = Number(prompt("Qual é a lotacao do abrigo?"))
    console.log("Cidade Cadastrada com sucesso:")
    console.log("Endereço cadastrado com sucesso:")
    console.log("Telefone cadastrado com sucesso:")
    console.log("Informação cadastrada com sucesso:")
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
nomeabg : [],
cidadeabri:[],
telefoneabri:[],
lotacao:[],
}

function abri(abrigo){
    console.log=("=======Bem vindo a lista de Abrigos=======")
    const recabrigo = [abrigos.nomeabg]
    const recabrigo2 = [abrigos.cidadeabri]
    const recabrigo3 = [abrigos.telefoneabri]
    const recabrigo4 = [abrigos.lotacao]
}
console.log(abri(abrigos))


