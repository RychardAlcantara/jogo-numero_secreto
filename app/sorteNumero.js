const maiorValor = 1000
const menorValor = 1
const numeroSecreto = gerarNumeroAleatorio ()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorrValor = document.getElementById('maior-valor')
elementoMaiorrValor.innerHTML = maiorValor


console.log(numeroSecreto)