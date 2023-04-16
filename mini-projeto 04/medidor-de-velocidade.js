//Medidor de Velocidade (Mini-Projeto 04)

//Velocidade Máxima de até 70
//a cada 5km acima do limite você ganha 1 ponto
// utiliza a função Math.floor()
//caso os pontos seja maior que 12 > "Carteira Suspendida"
verificadorVelocidade(82)

function verificadorVelocidade(Velocidade) {
    const velocidadeMaxima = 70
    const kmPorPontos = 5
    if (Velocidade <= velocidadeMaxima)
    console.log('Parabéns! Você é um ótimo motorista.')
    else {
        const pontos = Math.floor(((Velocidade - velocidadeMaxima) / kmPorPontos)) 
        if (pontos >= 12)
            console.log('Carteira Suspensa')
        else 
            console.log('Pontos', pontos)
    }
}