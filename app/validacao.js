function verificaChute(chute) {
    const numero = +chute;
    if (chuteInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
            document.body.style.backgroundColor = "black";
            recognition.addEventListener('end', () => recognition.stop())
        } else if (chute.toUpperCase() === "REINICIAR") {
            window.location.reload();
            return

        } else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>';
            return
        }
        
    }

    if (limitadorDeNumero(numero)) {
        elementoChute.innerHTML += `<div> Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}`;
        return false;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        recognition.addEventListener('end', () => recognition.stop())

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `;
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `;
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function limitadorDeNumero(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', event => {
    if (event.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})