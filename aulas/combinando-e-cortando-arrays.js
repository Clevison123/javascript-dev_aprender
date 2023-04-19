//JavaScript - Introdução a Arrays
//1 - Add novos elementos
//2 - Encontrar elementos
//3 - Remover elementos
//4 - Dividir elementos
//5 - Dividir arrays
//6 - Combinar arrays

//JavaScript - Combinando e cortando arrays
//Duvidas olhe no curso de javascript combinando um array 4:06:38

const primeiro = [1,2,3]
const segundo = [4,5,6]

//Primeiro irei combina os arrays
const combinado = primeiro.concat(segundo)
console.log(combinado)


//Segundo irei dividir os arrays
const cortado = combinado.slice()
console.log(cortado)