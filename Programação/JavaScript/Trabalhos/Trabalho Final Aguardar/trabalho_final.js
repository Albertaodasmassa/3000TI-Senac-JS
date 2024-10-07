let opcao = prompt("1-Cadastrar Abrigo\n2-Listar Abrigo\n3-procurar abrigo\n4-Sair\nEscolha Uma opcao:")
let res = prompt("Gostaria de cadastrar um abrigo?\n")
let listabrigo = []
//Menu de ações
switch(opcao){
  case '1':
  cadfun(opcao)
  console.log("Esse e o Abrigo cadastrado",listabrigo)
  break
  case '2':
 if(res==="sim"){
  console.log("=Bem vindo ao sistema de cadastro=")}
  else if(res!=="sim"){
  console.log("Deseja Voltar ao menu principal?")
  break
  }else{
  console.log('Essa e a Lista de Abrigos existes.',listabrigo)
  }
  break
  case '3':
  console.log('Gostaria de Procurar os abrigos existentes')
  break
  default:
  console.log('Sair')
  break
}
function cadfun(opcao){
    console.log("======================================")
    const nomecid = prompt("Qual e o nome da cidade que gostaria de cadastrar ?")
    const enderecocid = prompt("Qual e endereco da cidade que gostaria de cadastrar? ")
    const telefone = Number(prompt("Qual e o telefone do abrigo?"))
    const lotacao = Number(prompt("Qual é a lotacao do abrigo em pessoas?"))
    listabrigo.push(nomecid)
    listabrigo.push(enderecocid)
    listabrigo.push(telefone)
    listabrigo.push(lotacao)
    console.log("======================================")
    console.log("Cidade Cadastrada com sucesso.")
    console.log("Endereço cadastrado com sucesso.")
    console.log("Telefone cadastrado com sucesso.")
    console.log("Informação cadastrada com sucesso.")
    console.log("====================================")
}
