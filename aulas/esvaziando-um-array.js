//JavaScript - Introdução a Arrays
//1 - Add novos elementos
//2 - Encontrar elementos
//3 - Remover elementos
//4 - Dividir elementos
//5 - Dividir arrays
//6 - Combinar arrays

//JavaScript - Esvaziando um Array
let numeros = [1,2,3,4,5,6]
let outros = numeros
//Solução 1
//numeros = []
//console.log(numeros)

//Solução 2 > o mais recomendável
numeros.length = 0
console.log(numeros)
console.log(outros)

//Solução 3
//numeros.splice(0,numeros.length)
//console.log(numeros)

//Solução 4 > o menos recomendável
//while (numeros.length > 0)
//    numeros.pop()
