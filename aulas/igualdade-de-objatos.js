//Exercício - Igualdade de Objetos 

function endereco(rua,cidade,cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new endereco('a', 'b', 'c')
const endereco2 = new endereco('a', 'b', 'c')
//const endereco3 = endereco1

function saoIguais(endereco1,endereco2) {
    //comparar se as propriedades são iguais
    return endereco1.rua === endereco2.rua &&
           endereco1.cidade === endereco2.cidade &&
           endereco1.cep === endereco2.cep
}

console.log(saoIguais(endereco1,endereco2))

function temEnderecoMemoriaIguais(endereco1,endereco2){
    //Comparando se a referência do objeto aponta para o mesmo local na memória
    return endereco1 === endereco2 //endereco3
}

console.log(temEnderecoMemoriaIguais(endereco1,endereco2))