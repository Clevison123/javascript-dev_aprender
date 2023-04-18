//Montador de Endereço (Mini-Projeto 14)

//JavaScript - Objeto Endereço

//Criar um objeto que contem:
//Rua
//Cidade
//CEP
//exibirEndereco(endereco)

let endereco = {
    rua: 'Santos da silva',
    cidade: 'São Paulo - SP',
    cep: 3212289
}

function exibirEndereco(endereco){
    for(let chave in endereco)
    console.log(chave, endereco[chave])
}

exibirEndereco(endereco)