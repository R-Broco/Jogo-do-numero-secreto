let listaSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log('número secreto: ' + numeroSecreto);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial () {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial ();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou Mizerávi!');
        let tentativaPlural = tentativas == 1?'tentativa':'tentativas';
        exibirTextoNaTela('p', 'Você descobriu o número secreto com ' + tentativas + ' ' + tentativaPlural);
        console.log('Acertou, o Número secreto é ' + numeroSecreto + ' [' + tentativas + ' tentativas]');
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p','O número secreto é menor que ' + chute);
            console.log('O número secreto é ' + numeroSecreto + ', logo, é menor que ' + chute);
            limparCampo();
            return tentativas++;
        } if (chute < numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é maior que ' + chute);
            console.log('O número secreto é ' + numeroSecreto + ', logo, é maior que ' + chute);
            limparCampo();
            return tentativas++;
        }
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let = quantidadeDeElementosNaLista = listaSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaSorteados = []
    }
    if (listaSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaSorteados.push(numeroEscolhido);
        console.log(listaSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    limparCampo();
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    console.log('número secreto: ' + numeroSecreto);
    exibirMensagemInicial ();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}












