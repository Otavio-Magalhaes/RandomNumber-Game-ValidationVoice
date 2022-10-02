function verificaChuteValido(chute){
    const numero = +chute;

    if(chuteInvalido(numero)){

        if(chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML = 
              `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar__novamente" class="btn--jogar" >Jogar novamente</button>              
                `
            document.body.style.backgroundColor = "black";              
        }
        else{
            elementoChute.innerHTML += '<div>invalido!</div>';
            
        }

    }

    if(numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML += `
        <div>Valor  invalido: ${numero}: Fale um número entre ${menorValor} e ${maiorValor} </div>`;
        return
    }

    if(numero == numeroSecreto){
        document.body.innerHTML =  `
        <h2>Você Acertou!</h2>
        <h3>O número secreto era: ${numeroSecreto}</h3>

        <button id="jogar__novamente" class ="btn--jogar">Jogar Novamente</button>`
    }

    else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O Número Secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    }
    else{
        elementoChute.innerHTML += `
        <div>O Número Secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero<menorValor
}




document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogar__novamente'){
        window.location.reload();
    }
})