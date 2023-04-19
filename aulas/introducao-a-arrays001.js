//JavaScript - Introdução a Arrays
//1 - Add novos elementos
//2 - Encontrar elementos
//3 - Remover elementos
//4 - Dividir elementos
//5 - Dividir arrays
//6 - Combinar arrays

//1 - Adicionando elementos
const numeros = [1,2,3]

//Início
numeros.unshift(0)
console.log(numeros)
//Meio
numeros.splice(1,0,'a')
console.log(numeros)
//Final
numeros.push(5)
console.log(numeros)