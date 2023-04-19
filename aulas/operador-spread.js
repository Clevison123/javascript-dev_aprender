// JavaScript - O Operador Spread

const primeiro = [1,2,3]
const segundo = [4,5,6]

//const combinado = primeiro.concat(segundo)
const combinado = [...primeiro,'a',...segundo,'b',]
console.log(combinado)
//const cortado = combinado.slice()
const clonado = [...combinado]
console.log(clonado)

//Spread