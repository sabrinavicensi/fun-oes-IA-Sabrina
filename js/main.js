import { aleatorio } from "./aleatorio.js";
import { pergunstas } from "./perguntas.js";


const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultados = document.querySelector(".caixa-resultado");
const botaojogarnovamente = document.querySelector(".novamente-btn");


    let atual = 0;
    let perguntasAtual;
    let historiafinal = ""

    function mostrarpergunta (){
        perguntasAtual = perguntas [atual];
        caixaPerguntas;textcontent = perguntaAtual.emumciado;
        mostrarAlternativas();
    }

    function mostrarAlternativas(){
        for (const alternativas of perguntaAtual.alternativas){
            const botaoAlternativas = document.createElement ("button")
            botaoAlternativas.textContent= alternativa.texto;
            botaoAltermativas.addEventListener("click"),() => respostaSelecionada(alternativas)
            caixaAlternativas.appendChild(botaoAlternativas);

        }

    }

    function resṕstaSelecionada(opcoeSelecionada){
        const afirmacoes = opcoeSelecionada.afirmacao;
        historiaFinal = afirmacoes += " " 
        atual++;
        mostrarpergunta();
    }

    function mostraResultado (){
        caixaPerguntas.textContent = "Em 2049...";
        textoResultados.textContent = historiaFinal;
        caixaAlternativas.textContent = " ";
        botaojogarnovamente.addEventListener("click", jogarnovamente);
    }

    function jogarnovamente(){
        atual = 0;
        historiafinal = "";
        mostraPergunta();

    }

mostraPergunta();