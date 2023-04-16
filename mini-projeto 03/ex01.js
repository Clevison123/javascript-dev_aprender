//FizzBuzz (Mini-Projeto 3) ps: Dúvidas olhe o Curso JavaScript! hora 1:40:00


//Divisível por 3 => Fizz
//Divisível por 5 => Buzz
// e Divisível por 3 e 5 => FizzBuzz
//Não divisível por 3 ou 5 => entrada. No caso retorna o mesmo valor da entrada!
//Não é um número => retorna a msg: 'Não é um número'

const resultado = fizzbuzz(11)
console.log(resultado)

function fizzbuzz(entrada){
    if (typeof entrada !=='number')
        return 'Não é um número'
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz'
    if (entrada % 3 === 0)
        return 'Fizz'
    if (entrada % 5 === 0)
        return 'Buzz'
    return entrada
}