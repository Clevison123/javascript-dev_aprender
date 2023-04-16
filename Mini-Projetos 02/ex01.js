//Máximo Entre Dois Valores (Mini-Projeto 2)

//Escreve uma função que usa 2 números e retorna o maior entre eles

let valorMaior = max(15,15)
console.log(valorMaior)

function max(numero1, numero2) {
    if(numero1 > numero2)
    return numero1
    else return numero2
    //código mais limpo: return numero1 > numero2? numero1: numero2:;
}