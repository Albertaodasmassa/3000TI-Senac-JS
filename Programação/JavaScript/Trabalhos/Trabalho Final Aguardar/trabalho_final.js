let cidade = prompt("Selecione uma opcao|cadastrar abrigo |listar abrigo|Procurar Abrigo|: ")
let res = prompt("Gostaria de cadastrar uma nova cidade? Sim|Não")
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
    function abri(abrigos){
    console.log=("=======Bem vindo a lista de Abrigos=======")
}
const abrigos ={
nomeabg : [],
cidadeabri:[],
telefoneabri:[],
lotacaoabg:[],
}


switch(cidade){
  case 'cadastrar abrigo':
  console.log('Gostaria de cadastrar um Novo Abrigo?')
  cadfun(cidade)
  break
  case 'listar abrigo':
  console.log('Gostaria de Listar os abrigo existentes?')
  if(res=="sim")
      console.log("=====Bem vindo ao sistema de cadastro=====")
   abri(abrigos)
  break
  case 'procurar':
  console.log('Gostaria de Procurar os abrigos existentes')
  break
  default:
  console.log('Sair')
  break
}
