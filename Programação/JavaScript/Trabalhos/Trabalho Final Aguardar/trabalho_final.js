let cidade = prompt("|cadastrar abrigo |listar abrigo|Procurar Abrigo|: ")
let res = prompt("Gostaria de cadastrar um novo abrigo? Sim|Não")
function cadfun(cidade){
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
    function listabrigo(infoabrigo,cadfun){
    console.log=("=======Bem vindo a lista de Abrigos=======")
    infoabrigo={
        ...cadfun
        nomeabrigo:cadfun(nomecid),
        cidadeabrigo:cadfun(enderecocid),
        Endereçoabrigo:cadfun(telefone),
        telefoneabrigo:cadfun(lotacao)
    }
}
switch(cidade){
  case 'cadastrar abrigo':
  cadfun(cidade)
  break
  case 'listar abrigo':
  console.log('Gostaria de Listar os abrigo existentes?')
  if(res==="sim")
      console.log("=====Bem vindo ao sistema de cadastro=====")
   listabrigo(res)
  break
  case 'procurar':
  console.log('Gostaria de Procurar os abrigos existentes')
  break
  default:
  console.log('Sair')
  break
}
