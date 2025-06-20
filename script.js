const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao chegar na escola, você percebe que muitos colegas não têm acesso a computadores ou internet em casa. Qual sua primeira reação?",
        alternativas: [
            {
                texto: "Isso é muito injusto! Todos deveriam ter as mesmas oportunidades.",
                afirmacao: "Você ficou chocado com a desigualdade tecnológica na educação."
            },
            {
                texto: "Talvez eu possa ajudar de alguma forma.",
                afirmacao: "Você começou a pensar em soluções para reduzir essa desigualdade."
            }
        ]
    },
    {
        enunciado: "Seu professor propôs um trabalho que requer pesquisa online, mas alguns alunos não têm computador em casa. O que você faz?",
        alternativas: [
            {
                texto: "Organizo um grupo de estudo na escola ou biblioteca pública para ajudar esses colegas.",
                afirmacao: "Você tomou iniciativa para criar oportunidades de acesso à tecnologia."
            },
            {
                texto: "Falo com o professor para sugerir alternativas que não dependam de tecnologia.",
                afirmacao: "Você mostrou sensibilidade às limitações dos colegas e buscou soluções inclusivas."
            }
        ]
    },
    {
        enunciado: "A escola recebeu alguns computadores novos, mas não são suficientes para todos. Como você acha que deveriam ser distribuídos?",
        alternativas: [
            {
                texto: "Priorizar os alunos que não têm nenhum acesso em casa.",
                afirmacao: "Você defendeu uma distribuição que reduzisse as desigualdades existentes."
            },
            {
                texto: "Sortear entre todos os alunos para ser justo.",
                afirmacao: "Você acredita em igualdade de oportunidades, mas reconhece que isso não resolve o problema da desigualdade."
            }
        ]
    },
    {
        enunciado: "Você descobre que em outra escola do bairro a situação é ainda pior, sem computadores nem internet. O que você faz?",
        alternativas: [
            {
                texto: "Mobilizo colegas para arrecadar equipamentos usados e doar.",
                afirmacao: "Você se tornou um agente ativo na redução da desigualdade digital."
            },
            {
                texto: "Escrevo uma carta às autoridades pedindo mais investimento em educação pública.",
                afirmacao: "Você entende que o problema é estrutural e busca soluções em políticas públicas."
            }
        ]
    },
    {
        enunciado: "Ao conversar com um colega que não tem acesso à tecnologia em casa, você percebe que ele está desanimado com os estudos. O que você diz?",
        alternativas: [
            {
                texto: "A tecnologia ajuda, mas não é tudo - seu esforço e dedicação são o mais importante.",
                afirmacao: "Você ajudou a motivar seu colega mostrando que educação vai além dos recursos tecnológicos."
            },
            {
                texto: "Vamos encontrar maneiras de você acessar a tecnologia quando precisar, eu te ajudo!",
                afirmacao: "Você se comprometeu a ser um aliado na busca por igualdade de oportunidades."
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
    caixaPerguntas.textContent = "Refletindo sobre a educação...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();