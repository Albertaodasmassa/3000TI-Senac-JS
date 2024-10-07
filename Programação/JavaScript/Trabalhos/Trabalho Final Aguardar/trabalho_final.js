let opcao = prompt("1-Cadastrar Abrigo\n2-Listar Abrigo\n3-procurar abrigo\n4-Sair\nEscolha Uma opcao:")
let listabrigo = []

//Menu de ações

while(opcao!=='4'){
switch(opcao){
  case '1':
  cadfun(opcao)
  break
  case '2':
  let res = prompt("Gostaria de cadastrar um abrigo?\n")
 if(res==="sim"){
  console.log("=Bem vindo ao sistema de cadastro=")}
  else if(res!=="sim"){
  console.log("Deseja Voltar ao menu principal?")
  break
  }else{
  console.log('Essa e a Lista de Abrigos existes:',listabrigo)
  }
  break
  case '3':
  console.log('Gostaria de Procurar os abrigos existentes')
  break
  case '4':
  console.log('Sair')
  break
  default:
  console.log('Opção Invalida!!!!')
  break
}
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
}
