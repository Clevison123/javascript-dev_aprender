/*
No JavaScript temos cinco loops
1.For
2.While
3.Do..While
4.For..in
5.For..of
*/ 

//Maneiras de usa cada um!

//4.For..In

const pessoa = {
    nome: 'Jhonatan',
    idade: 23
}

for(let chave in pessoa) {
    console.log(chave,pessoa['nome'])
}

const cores  = ['Vermelho', 'Azul', 'Verde', 'Cinza', 'Rosa']

for(let indice in cores) {
    console.log(indice, cores [indice])
}