//Objeto de postagem de blog (Mini-Projeto)

//JavaScript - Objeto postagem de blog

//Eu vou criar um objeto de postagem de blog que vai conter as seguintes propriedades
/*
titulo:
mensagem:
autor:
vizualizacoes:
comentarios
    (autor, mensagem)
estaAoVivo
*/

let postagemBlog = {
    titulo: 'a',
    mensagem: 'b',
    autorp: 'c',
    vizualizacoes: 123.567,
    comentarios : [
       { autor: 'a' , mensagens: 'b'},
       { autor: 'a' , mensagens: 'b'}
    ],
    estaaovivo: true
}

console.log(postagemBlog)