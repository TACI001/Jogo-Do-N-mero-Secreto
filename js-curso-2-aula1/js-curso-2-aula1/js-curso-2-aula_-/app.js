let ListaDeNumerosSorteados = [];
let numerolimite = 10
let numeroSecreto = GerarNumeroAleatorio();
let tentativas = 1
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;    
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}
function exibirmensageminicial() {
exibirTextoNaTela('h1','Jogo Do Numero Secreto');
exibirTextoNaTela('p','Escolha Um Numero Entre 1 e 10');
}

exibirmensageminicial();

function  verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if(chute == numeroSecreto ){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mensagemTentativas =    `Você Descobriu o Número Secreto Com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O Número secreto é Menor');
        }else{
            exibirTextoNaTela('p','O Número Secreto é Maior');
        }
        // tentativas = tentativas +1;
        tentativas++;
        limparCampo();
    }
}

function GerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numerolimite + 1);
    let quantidadeDeElementosNalista = ListaDeNumerosSorteados.length;

    if(quantidadeDeElementosNalista == numerolimite){
      ListaDeNumerosSorteados = [];
    }

    if(ListaDeNumerosSorteados.includes(numeroEscolhido)){
        return GerarNumeroAleatorio();
    }else{
        ListaDeNumerosSorteados.push(numeroEscolhido)
        console.log(ListaDeNumerosSorteados)
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarjogo(){
    numeroSecreto = GerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirmensageminicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

let listaGenerica = [] 
console.log(listaGenerica)


let linguagensDeProgramacao = ['Java', 'Ruby','GoLang'];
linguagensDeProgramacao.push('JavaScript', 'C', 'C++', 'Kotlin', 'Python')

let nomes =['tacio0','tacio1','tacio2']
console.log(nomes[0])