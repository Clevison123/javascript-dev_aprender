//Contador de Asteríscos (Mini-Projeto 9)

//Criar uma função que exibe a quantidade de * que aquela linha linha possui

exibirAsteriscos(5)

function exibirAsteriscos(linhas) {
//    let padrao = ''
//    for(let linha = 1; linha <= linhas; linha++) {
//        padrao += '*'
//        console.log(padrao)
//    }

//Segundo jeito de se fazer 
    for(let linha = 1; linha <= linhas; linha++){
        let padrao = ''
        for(let i = 0; i < linha; i++){
            padrao += '*'
        }
        console.log(padrao)
    }

}