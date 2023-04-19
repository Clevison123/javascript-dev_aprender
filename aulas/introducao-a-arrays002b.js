//JavaScript - Introdução a Arrays
//1 - Add novos elementos
//2 - Encontrar elementos
//3 - Remover elementos
//4 - Dividir elementos
//5 - Dividir arrays
//6 - Combinar arrays

//2 - Encontrar elementos(Tipos de referência)
//Pesquisar: JavaScript - Find arrays

const marcas = [
    {id:1 , nome: 'a'},
    {id:2 , nome: 'b'},
    {id:3 , nome: 'c'}
]

const marca = marcas.find(function(marca){
    return marca.nome === 'a'
}) 

console.log(marca)