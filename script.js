const perguntas = [
  {
    pergunta:
      "Qual é o nome do personagem principal da série de jogos 'The Legend of Zelda'?",
    respostas: [
      { texto: "Link", correto: true },
      { texto: "Zelda", correto: false },
      { texto: "Ganondorf", correto: false },
      { texto: "Impa", correto: false },
    ],
    dica: "Ele usa uma espada e um escudo.",
  },
  {
    pergunta:
      "Qual é o nome do vilão principal da série de jogos 'Final Fantasy VII'?",
    respostas: [
      { texto: "Cloud Strife", correto: false },
      { texto: "Sephiroth", correto: true },
      { texto: "Tifa Lockhart", correto: false },
      { texto: "Aerith Gainsborough", correto: false },
    ],
    dica: "Ele tem uma espada gigante chamada 'Masamune'.",
  },
  {
    pergunta: "Qual é o nome do personagem principal do jogo 'The Witcher'?",
    respostas: [
      { texto: "Geralt of Rivia", correto: true },
      { texto: "Yennefer of Vengerberg", correto: false },
      { texto: "Ciri", correto: false },
      { texto: "Triss Merigold", correto: false },
    ],
    dica: "Ele é um caçador de monstros conhecido como 'O Bruxo'.",
  },
  {
    pergunta: "Qual é o nome do protagonista do anime 'One Piece'?",
    respostas: [
      { texto: "Roronoa Zoro", correto: false },
      { texto: "Nami", correto: false },
      { texto: "Trafalgar Law", correto: false },
      { texto: "Monkey D. Luffy", correto: true },
    ],
    dica: "Ele é um pirata e tem poderes de borracha.",
  },
  {
    pergunta: `Quem foi a líder destemida das lendárias Guerreiras Kyoshi, que viveu na mesma época que Aang?`,
    respostas: [
      { texto: "Ty Lee", correto: false },
      { texto: "Rangi", correto: false },
      { texto: "Kyoshi", correto: false },
      { texto: "Suki", correto: true },
    ],
    dica: "Ela é conhecida por sua incrível maestria em artes marciais e por não ser uma dominadora de nenhum elemento",
  },
  {
    pergunta:
      "Quem é o sinistro antagonista por trás das sombras, instigando o caos nos bastidores do torneio 'The King of Fighters 96' e aterrorizando os competidores no 'The King of Fighters 97'?",
    respostas: [
      { texto: "Rugal Bernstein", correto: false },
      { texto: "Goenitz", correto: false },
      { texto: "Orochi", correto: true },
      { texto: "Ash Crimson", correto: false },
    ],
    dica: "Esta entidade maligna é uma antiga divindade cujo despertar desencadeia o caos e a destruição no mundo. Seu nome evoca temor e é associado a lendas sombrias, pactos de sangue e possessão demoníaca.",
  },
  {
    pergunta: "Qual o nome do Judeu do South Park?",
    respostas: [
      { texto: "Cartman", correto: false },
      { texto: "Stan", correto: false },
      { texto: "Kyle", correto: true },
      { texto: "Kenny", correto: false },
    ],
    dica: "Ele usa chapéu verde",
  },
  {
    pergunta:
      "Quantos Rounds são necessarios para vencer uma partida de CS2 atualmente?",
    respostas: [
      { texto: "13", correto: true },
      { texto: "12", correto: false },
      { texto: "15", correto: false },
      { texto: "16", correto: false },
    ],
    dica: "Mesmo padrão do jogo Valorant",
  },
  {
    pergunta: "Qual o nome do cachorro do Bart em Os Simpsons?",
    respostas: [
      { texto: "Bob", correto: false },
      { texto: "Michal", correto: false },
      { texto: "Ajudante de Papel Noel", correto: true },
      { texto: "Lisa", correto: false },
    ],
    dica: "Bart o adotol no natal",
  },
  {
    pergunta: "Em RPG, qual classe tem vantagem contra undead?",
    respostas: [
      { texto: "Monge", correto: false },
      { texto: "Mago", correto: false },
      { texto: "Paladino", correto: false },
      { texto: "Clérigo", correto: true },
    ],
    dica: "É a passiva da classe",
  },
  {
    pergunta: "Qual animal é o Sonic?",
    respostas: [
      { texto: "Ouriço", correto: true },
      { texto: "Lêmure", correto: false },
      { texto: "Rato", correto: false },
      { texto: "Tamanduá", correto: false },
    ],
    dica: "É um animal conhecido por seus espinhos",
  },
  {
    pergunta:
      "Como se chama a nave usada por Doctor Who para viajar pelo tempo-espaço?",
    respostas: [
      { texto: "Delorean", correto: false },
      { texto: "Time-Turner", correto: false },
      { texto: "Time Displacement Equipment", correto: false },
      { texto: "TARDIS", correto: true },
    ],
    dica: "Seu nome é um acrônimo para 'Time and Relative Dimension in Space'",
  },
  {
    pergunta:
      "Qual é o nome do primeiro Líder de Ginásio que aparece em Pokémon: Indigo League?",
    respostas: [
      { texto: "Misty", correto: false },
      { texto: "Professor Carvalho", correto: false },
      { texto: "Brock", correto: true },
      { texto: "St. Surge", correto: false },
    ],
    dica: "Usa pokémons do tipo pedra",
  },
  {
    pergunta:
      "Quais são os três pássaros lendários do Pokémon FireRed/LeafGreen?",
    respostas: [
      { texto: "Articuno, Zapdos, Moltres", correto: true },
      { texto: "Mewtwo, Lugia, Pidgeotto", correto: false },
      { texto: "Articuno, Raikou, Suicune", correto: false },
      { texto: "Rayquaza, Zapdos, Latios", correto: false },
    ],
    dica: "Eles representam os tipos gelo, elétrico e fogo, respectivamente.",
  },
  {
    pergunta: `Qual é o elemento nativo de Korra, a protagonista de "Avatar, a Lenda de Korra"?`,
    respostas: [
      { texto: "Água", correto: true },
      { texto: "Terra", correto: false },
      { texto: "Fogo", correto: false },
      { texto: "Ar", correto: false },
    ],
    dica: "Korra nasceu no Polo Sul",
  },
];

let perguntaAtual = 0;
let pontuacao = 0;
const elementoPergunta = document.getElementById("question");
const botoesResposta = document.querySelectorAll(".answer-btn");
const botaoAjuda = document.getElementById("help-btn");
const elementoDica = document.getElementById("hint");
const botaoProxima = document.getElementById("next-btn");
const elementoFeedback = document.getElementById("feedback");
const elementoPontuacao = document.getElementById("score");

// Adiciona o evento de clique para o botão "Próxima Pergunta"
botaoProxima.addEventListener("click", () => {
  perguntaAtual++;
  if (perguntaAtual < perguntas.length) {
    mostrarPergunta(perguntas[perguntaAtual]);
  } else {
    finalizarJogo();
  }
});

iniciarJogo();

function iniciarJogo() {
  mostrarPergunta(perguntas[perguntaAtual]);
}

function mostrarPergunta(pergunta) {
  elementoPergunta.innerText = pergunta.pergunta;
  elementoDica.innerText = "";
  botoesResposta.forEach((botao, index) => {
    botao.innerText = pergunta.respostas[index].texto;
    botao.onclick = () => verificarResposta(pergunta.respostas[index]);
    botao.disabled = false; // Habilita os botões de resposta
  });
  elementoFeedback.innerText = ""; // Limpa o feedback
  botaoProxima.classList.add("hide"); // Esconde o botão de próxima pergunta
  botaoAjuda.disabled = false; // Habilita o botão de ajuda
  elementoDica.classList.add("hide"); // Esconde a dica
}

function verificarResposta(resposta) {
  if (resposta.correto) {
    elementoFeedback.innerText = "Resposta correta!";
    elementoFeedback.style.color = "green";
    pontuacao++;
    atualizarPontuacao();
    botaoAjuda.disabled = true;
  } else {
    elementoFeedback.innerText = "Resposta incorreta! A resposta correta era: ";
    perguntas[perguntaAtual].respostas.forEach((r) => {
      // o "r" é de resposta
      if (r.correto) {
        elementoFeedback.innerText += r.texto;
      }
    });
    elementoFeedback.style.color = "red";
    elementoDica.classList.remove("hide");
  }
  botoesResposta.forEach((botao) => (botao.disabled = true)); // Desativa os botões de resposta
  botaoProxima.classList.remove("hide"); // Mostra o botão de próxima pergunta
}

botaoAjuda.addEventListener("click", () => {
  elementoDica.innerText = `Dica: ${perguntas[perguntaAtual].dica}`;
  elementoDica.classList.remove("hide");
  botaoAjuda.disabled = true;
});

function atualizarPontuacao() {
  elementoPontuacao.innerText = `Pontuação: ${pontuacao}`;
}

function finalizarJogo() {
  elementoPergunta.innerText = "Parabéns! Você completou o jogo!";
  botoesResposta.forEach((botao) => botao.classList.add("hide"));
  botaoAjuda.classList.add("hide");
  botaoProxima.classList.add("hide");
  elementoFeedback.classList.add("hide");
  elementoDica.classList.add("hide");
}
