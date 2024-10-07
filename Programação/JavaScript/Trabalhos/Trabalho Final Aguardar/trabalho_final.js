let opcao = prompt("1-Cadastrar Abrigo\n2-Listar Abrigo\n3-procurar abrigo\n4-Sair\nEscolha Uma opcao:")
let listabrigo = []

//Menu de ações
while(opcao!=='4'){
switch(opcao){
  case '1':
  cadfun()
  break
  case '2':
  infoabrigo(listabrigo)
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
opcao = prompt("1-Cadastrar Abrigo\n2-Listar Abrigo\n3-procurar abrigo\n4-Sair\nEscolha Uma opcao:")
}

function cadfun(){
    const nomecid = prompt("Qual e o nome da cidade que gostaria de cadastrar ?")
    const enderecocid = prompt("Qual e endereco da cidade que gostaria de cadastrar? ")
    const telefone = Number(prompt("Qual e o telefone do abrigo?"))
    const lotacao = Number(prompt("Qual é a lotacao do abrigo em pessoas?"))
    listeste={
        nomecid: nomecid,
        teste: enderecocid,
        teste2: telefone,
        teste4:lotacao
        
    }
    listabrigo.push(listeste)
   
}
function infoabrigo(){
   for(let i=0;i>listabrigo.length; i++)
   alert("Os abrigos cadastrados são",listabrigo[i])
}
