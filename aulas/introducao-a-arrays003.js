//JavaScript - Introdução a Arrays
//1 - Add novos elementos
//2 - Encontrar elementos
//3 - Remover elementos
//4 - Dividir elementos
//5 - Dividir arrays
//6 - Combinar arrays

//3 - Remover elementos

const numeros = [1,2,3,4,5,6]

//Final
const ultimo = numeros.pop()
console.log(ultimo)
console.log(numeros)

//Início 
const primeiro = numeros.shift()
console.log(primeiro)
console.log(numeros)

//Meio
const meio = numeros.splice(2,1)
console.log(meio)
console.log(numeros)