const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultados = document.querySelector(".caixa-resultado");

const perguntas = [

    {
        enunciado: "quantas cores a biotecnologia tem?",
        alternativas: [
            {
                texto: "10 cores",
                afirmacao: "parabens!voce acertou",
            },
            {
                texto: "9 cores",
                afirmacao: "que pena!voce errou",
            }
        ]
    },
    {
        enunciado: "qual é a cor da biotecnologia responsavel pela fabricação de alimentos,cosmeticos e biocombustiveis?",
        alternativas: [
            {
                texto: "cor preta",
                afirmacao: "errado!essa é responsavel por microorganismos que podem ataca a saúde humana",
            },
            {
                texto: "cor branca",
                afirmacao: "certa resposta!é isso aí",
            }
        ]
    },
    {
        enunciado: "a biotecnologia laranja e dourada são responsavel por?",
        alternativas: [
            {
                texto: "divulgações de informações e melhor qualidade de alimento e laticinios.",
                afirmacao: "quase!esta é a cor laranja e amarela.",
            },
            {
                texto: "divulgações de informações e bioinformatica/nanotecnologia",
                afirmacao: "é isso aí correto!",
            }
        ]
    },
    {
        enunciado: "a biotecnologia cinza e marrom são responsavel por?",
        alternativas: [
                {
                    texto: "a cor vermelha",
                    afirmacao: "parabens! certinho",
                },
                {
                    texto: "a cor azul",
                    afirmacao: "errado! essa é responsavel pelos biomas marinhos e exploração do oceano",
                }
            ]
        },
]






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
    }

mostraPergunta();