let opcao = prompt("1-Cadastrar Abrigo\n2-Listar Abrigo\n3-procurar abrigo\n4-Sair\nEscolha Uma opcao:")
let res = prompt("Gostaria de cadastrar um abrigo?\n?")
//Função para cadastrar novo abrigo.
function cadfun(opcao){
    console.log("======================================")
    let nomecid = prompt("Qual e o nome da cidade que gostaria de cadastrar ?")
    let enderecocid = prompt("Qual e endereco da cidade que gostaria de cadastrar? ")
    let telefone = Number(prompt("Qual e o telefone do abrigo?"))
    let lotacao = Number(prompt("Qual é a lotacao do abrigo em pessoas?"))
    console.log("======================================")
    console.log("Cidade Cadastrada com sucesso.")
    console.log("Endereço cadastrado com sucesso.")
    console.log("Telefone cadastrado com sucesso.")
    console.log("Informação cadastrada com sucesso.")
    console.log("====================================")
}
function listaabrigo(infoabrigo,){
    infoabrigo={
    nomeabrigo:[],
    telabrigo:[],
    enderecoabri:[],
    lotacaopessoas:[],
}
}
//Menu de ações
switch(opcao){
  case '1':
  if(res==="sim"){
  console.log("=Bem vindo ao sistema de cadastro=")}
  else if(res2!=="sim"){
  console.log("Deseja Voltar ao menu principal?")
  }else{
  console.log("Opcao Não disponivel")
  }
  cadfun(opcao)
  break
  case '2':
 console.log('Essa e a Lista de Abrigos existes.')
  break
  case '3':
  console.log('Gostaria de Procurar os abrigos existentes')
  break
  default:
  console.log('Sair')
  break
}
