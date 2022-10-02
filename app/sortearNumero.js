const menorValor = 0;
const maiorValor = 100;
const numeroSecreto = geraNumero();

function geraNumero(){
    return parseInt(Math.random() *  (menorValor - maiorValor - 1)  + (maiorValor + 1));
}

console.log(`Numero Secreto:  ${numeroSecreto}`);


const elementoMenorValor = document.getElementById("menor__valor");
const elementoMaiorValor = document.getElementById("maior__valor");

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor; 