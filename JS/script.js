// Vragen met AI gemaakt
const questions = [
    {
        question: "De hoofdstad van Nederland is:",
        options: ["Amsterdam", "Rotterdam", "Haarlem", "Den Haag"],
        goodAnswer: "Amsterdam"
    },
    {
        question: "Wat is de grootste planeet in ons zonnestelsel?",
        options: ["Aarde", "Mars", "Jupiter", "Saturnus"],
        goodAnswer: "Jupiter"
    },
    {
        question: "Wat is de hoofdstad van Frankrijk?",
        options: ["Lyon", "Marseille", "Parijs", "Nice"],
        goodAnswer: "Parijs"
    },
    {
        question: "Wie schreef 'Romeo en Julia'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        goodAnswer: "William Shakespeare"
    },
    {
        question: "Wat is de grootste oceaan ter wereld?",
        options: ["Atlantische Oceaan", "Indische Oceaan", "Stille Oceaan", "Arctische Oceaan"],
        goodAnswer: "Stille Oceaan"
    },
    {
        question: "Wat is de hoofdstad van Japan?",
        options: ["Osaka", "Kyoto", "Tokio", "Hiroshima"],
        goodAnswer: "Tokio"
    },
    {
        question: "Wie ontdekte penicilline?",
        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"],
        goodAnswer: "Alexander Fleming"
    },
    {
        question: "Wat is de langste rivier ter wereld?",
        options: ["Nijl", "Amazonerivier", "Yangtze", "Mississippi"],
        goodAnswer: "Nijl"
    },
    {
        question: "Wat is de hoofdstad van Italië?",
        options: ["Milaan", "Rome", "Venetië", "Napels"],
        goodAnswer: "Rome"
    },
    {
        question: "Wie schilderde de Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        goodAnswer: "Leonardo da Vinci"
    }
];

let questionNumber = 0;
let goodAnswers = 0;
let wrongAnswers = 0;

const questionDisplay = document.getElementById("questionDisplay");
const questionText = document.getElementById("questionText");
const optionsSelect = document.getElementById("optionsSelect");
const questionFeedback = document.getElementById("questionFeedback");
const scoreDisplay = document.getElementById('scoreDisplay');

function loadQuestion() {
    const question = questions[questionNumber];
    questionDisplay.innerText = `Vraag: ${questionNumber + 1}`;
    questionText.innerText = question.question;

    optionsSelect.innerHTML = ''; // Vraag leegmaken 
    question.options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.innerText = option;
        optionsSelect.appendChild(optionElement); // In de dropdown neerzetten
    });
}

function checkAnswer() {
    const selectedAnswer = optionsSelect.value;
    const question = questions[questionNumber];

    if (selectedAnswer === question.goodAnswer) {
        goodAnswers++;
        questionFeedback.innerHTML = "Goed!";
        questionFeedback.style.color = "green";
    } else {
        wrongAnswers++;
        questionFeedback.innerHTML = `Fout! Het goede antwoord was ${question.goodAnswer}`;
        questionFeedback.style.color = "red";
    }

    scoreDisplay.innerHTML = `Goed: ${goodAnswers} | Fout: ${wrongAnswers}`;

    questionNumber++;
    if (questionNumber < questions.length) {
        loadQuestion();
    } else {
        scoreDisplay.innerHTML = `Quiz Afgelopen, je hebt ${goodAnswers} goede antwoorden en ${wrongAnswers} foute antwoorden gegeven.`;
    }
}

loadQuestion();