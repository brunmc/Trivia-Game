
const questions = [
    {
        question: "Qual é o nome do personagem principal da série de jogos 'The Legend of Zelda'?",
        answers: [
            { text: "Link", correct: true },
            { text: "Zelda", correct: false },
            { text: "Ganondorf", correct: false },
            { text: "Impa", correct: false }
        ],
        hint: "Ele usa uma espada e um escudo."
    },
    {
        question: "Qual é o nome do vilão principal da série de jogos 'Final Fantasy VII'?",
        answers: [
            
            { text: "Cloud Strife", correct: false },
            { text: "Sephiroth", correct: true },
            { text: "Tifa Lockhart", correct: false },
            { text: "Aerith Gainsborough", correct: false }
        ],
        hint: "Ele tem uma espada gigante chamada 'Masamune'."
    },
    {
        question: "Qual é o nome do protagonista do anime 'Naruto'?",
        answers: [
            
            { text: "Sasuke Uchiha", correct: false },
            { text: "Kakashi Hatake", correct: false },
            { text: "Itachi Uchiha", correct: false },
            { text: "Naruto Uzumaki", correct: true },
        ],
        hint: "Seu sobrenome é Uzumaki."
    },
    {
        question: "Qual é o nome do personagem principal do jogo 'The Witcher'?",
        answers: [
            { text: "Geralt of Rivia", correct: true },
            { text: "Yennefer of Vengerberg", correct: false },
            { text: "Ciri", correct: false },
            { text: "Triss Merigold", correct: false }
        ],
        hint: "Ele é um caçador de monstros conhecido como 'O Bruxo'."
    },
    {
        question: "Qual é o nome do protagonista do anime 'One Piece'?",
        answers: [
           
            { text: "Roronoa Zoro", correct: false },
            { text: "Nami", correct: false },
            { text: "Trafalgar Law", correct: false },
            { text: "Monkey D. Luffy", correct: true }
        ],
        hint: "Ele é um pirata e tem poderes de borracha."
    },
    {
        question: "Qual é o nome do país onde se passa a maior parte do jogo 'The Elder Scrolls V: Skyrim'?",
        answers: [
            
            { text: "Cyrodiil", correct: false },
            { text: "Morrowind", correct: false },
            { text: "Skyrim", correct: true },
            { text: "Hammerfell", correct: false }
        ],
        hint: "O país é conhecido por seu clima gelado e dragões."
    },
    {
        question: "Quem é o criador da série de jogos 'Metal Gear Solid'?",
        answers: [
            { text: "Hideo Kojima", correct: true },
            { text: "Shigeru Miyamoto", correct: false },
            { text: "Gabe Newell", correct: false },
            { text: "Todd Howard", correct: false }
        ],
        hint: "Ele é conhecido por suas narrativas complexas e jogabilidade inovadora."
    },
    {
        question: "Qual o nome do Judeu do South Park?",
        answers: [
            { text: "Cartman", correct: false },
            { text: "Stan", correct:  false},
            { text: "Kyle", correct: true },
            { text: "Kenny", correct: false }
        ],
        hint: "Ele usa chapéu Verde"
    },
    {
        question: "Quantos Rounds são necessarios para vencer uma partida de CS2 atualmente ?",
        answers: [
            { text: "13", correct: true },
            { text: "12", correct: false },
            { text: "15", correct: false },
            { text: "16", correct: false }
        ],
        hint: "Padrão do valorant"
    },
    {
        question: "Qual o nome do cachorro do Bart em Os Simpsons?",
        answers: [
            { text: "Bob", correct: false },
            { text: "Michal", correct: false },
            { text: "Ajudante de Papel Noel", correct: true },
            { text: "Lisa", correct: false }
        ],
        hint: "Bart o adotol no natal"
    },
    {
        question: "Em RPG, qual classe tem vantagem contra undead ?",
        answers: [
            { text: "Monge", correct: false },
            { text: "Mago", correct: false },
            { text: "Paladino", correct: false },
            { text: "Clérigo", correct: true }
        ],
        hint: "É a passiva da classe"
    }
    
];

let currentQuestionIndex = 0;
let score = 0;
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-btn');
const helpButton = document.getElementById('help-btn');
const hintElement = document.getElementById('hint');
const nextButton = document.getElementById('next-btn');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');

// Adiciona o evento de clique para o botão "Próxima Pergunta"
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        endGame();
    }
});

startGame();

function startGame() {
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    hintElement.innerText = "";
    answerButtons.forEach((button, index) => {
        button.innerText = question.answers[index].text;
        button.onclick = () => checkAnswer(question.answers[index]);
        button.disabled = false; // Habilita os botões de resposta
    });
    feedbackElement.innerText = ""; // Limpa o feedback
    nextButton.classList.add('hide'); // Esconde o botão de próxima pergunta
    helpButton.disabled = false; // Habilita o botão de ajuda
    hintElement.classList.add('hide'); // Esconde a dica
}

function checkAnswer(answer) {
    if (answer.correct) {
        feedbackElement.innerText = "Resposta correta!";
        feedbackElement.style.color = "green";
        score++;
        updateScore();
        helpButton.disabled = true;
    } else {
        feedbackElement.innerText = "Resposta incorreta! Tente novamente.";
        feedbackElement.style.color = "red";
        hintElement.innerText = "Dica: " + questions[currentQuestionIndex].hint;
        hintElement.classList.remove('hide');
    }
    answerButtons.forEach(button => button.disabled = true); // Desativa os botões de resposta
    nextButton.classList.remove('hide'); // Mostra o botão de próxima pergunta
}

helpButton.addEventListener('click', () => {
    hintElement.innerText = "Dica: " + questions[currentQuestionIndex].hint;
    hintElement.classList.remove('hide');
    helpButton.disabled = true;
});

function updateScore() {
    scoreElement.innerText = "Pontuação: " + score;
}

function endGame() {
    questionElement.innerText = "Parabéns! Você completou o jogo!";
    answerButtons.forEach(button => button.classList.add('hide'));
    helpButton.classList.add('hide');
    nextButton.classList.add('hide');
    feedbackElement.classList.add('hide');
    hintElement.classList.add('hide');
}