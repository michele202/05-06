const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "No século XVI e XVII os europeus começaram a fazer teorias para justificar que os brancos seriam superior aos negros, eles fizeram uma pirâmide, no topo dela estava qual raça?",
        alternativas: [
            {
                texto: "No topo os brancos",
                afirmacao: "Certa"
            },
            {
                texto: "No topo os negros",
                afirmacao: "Errada"
            }
        ]
    },
    {
        enunciado: "O que é racismo institucional?",
        alternativas: [
            {
                texto: " É o preconceito e discriminação por parte de instituições públicas e privadas",
                afirmacao: "Certa"
            },
            {
                texto: "Racismo institucional não existe.",
                afirmacao: "Errada"
            }
        ]
    },
    {
        enunciado: "O que é racismo estrutural?",
        alternativas: [
            {
                texto: "É o conceito usado para definir que há sociedade em que os negros são considerados superiores..",
                afirmacao: "Errada"
            },
            {
                texto: "É o termo utilizado para falar que há sociedade estruturada com base racista",
                afirmacao: "Certa"
            }
        ]
    },
    {
        enunciado: "O que é o racismo?",
        alternativas: [
            {
                texto: "É o preconceito e discriminação contra um indivíduo pela sua cor de pele e etnia",
                afirmacao: "Certa"
            },
            {
                texto: "É o preconceito e discriminação contra um indivíduo contra sua crença ou religião",
                afirmacao: "Errada"
            }
        ]
    },
    {
        enunciado: "O certo de chamar o tom de pele escura é ",
        alternativas: [
            {
                texto: "Negro",
                afirmacao: "Certa"
            },
            {
                texto: "Preto",
                afirmacao: "Errada"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "confira agora as questoẽs que você acertou ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();