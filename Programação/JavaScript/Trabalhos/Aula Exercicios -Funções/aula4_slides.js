function arrays(){
    let array = Number(prompt("Por favor digite um numero"))
    let array2 = Number(prompt("Por favor digite um numero"))
    let array3 = Number(prompt("Por favor digite um numero"))
    let array4 = Number(prompt("Por favor digite um numero"))
    let array5 = Number(prompt("Por favor digite um numero"))
    let mestre = []
    let mestre4 = []
    mestre.push(array,array2,array3,array4,array5)
    console.log("O valor é e esse:",mestre)
    let mestre2 = (mestre[4])/2
    let mestre3 = (mestre[0])/2
    console.log("O valor é",mestre2)
    console.log("O valor é",mestre3)
    mestre4.push(mestre2,mestre3)
    console.log("O Valor da nova array  é:",mestre4)
 
}
arrays()
