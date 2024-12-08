document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quizForm');
    const resultContainer = document.getElementById('quizResult');

    const questions = [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyperlinks and Text Markup Language",
                "Hyper Text Markup Language",
                "Home Tool Markup Language",
                "Hyper Text Machine Language"
            ],
            correctAnswer: 1 // "Hyper Text Markup Language"
        },
        {
            question: "Which tag is used to define an internal style sheet in HTML?",
            options: ["style", "css", "script", "link"],
            correctAnswer: 0 // "<style>"
        },
        {
            question: "Which property is used to change the background color in CSS?",
            options: ["background-color", "bgcolor", "color", "background"],
            correctAnswer: 0 // "background-color"
        },
        {
            question: "What does the 'let' keyword do in JavaScript?",
            options: [
                "Defines a block-scoped variable",
                "Declares a global variable",
                "Creates a constant variable",
                "Reassigns an existing variable"
            ],
            correctAnswer: 0 // "Defines a block-scoped variable"
        },
        {
            question: "Which HTML5 element is used to define navigation links?",
            options: ["navigation", "nav", "header", "footer"],
            correctAnswer: 1 // "<nav>"
        },
        {
            question: "What is the correct CSS syntax for adding a border?",
            options: [
                "border: 1px solid black;",
                "border: black 1px solid;",
                "border: 1px black solid;",
                "border: solid 1px black;"
            ],
            correctAnswer: 0 // "border: 1px solid black;"
        },
        {
            question: "How do you write 'Hello World' in an alert box in JavaScript?",
            options: [
                "msg('Hello World');",
                "alert('Hello World');",
                "prompt('Hello World');",
                "console.log('Hello World');"
            ],
            correctAnswer: 1 // "alert('Hello World');"
        }
    ];

    function createQuiz() {
        const quizContainer = document.getElementById('quiz');
        questions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('quiz-question');
            questionDiv.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                ${q.options.map((option, optIndex) => `
                    <label>
                        <input type="radio" name="question${index}" value="${optIndex}">
                        ${option}
                    </label>
                `).join('')}
            `;
            quizContainer.appendChild(questionDiv);
        });
    }

    function gradeQuiz() {
        let score = 0;
        const userAnswers = [];

        const incorrectResponses = [];
        questions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            const userAnswer = selectedOption ? parseInt(selectedOption.value) : -1;
            userAnswers.push(userAnswer);

            if (userAnswer === q.correctAnswer) {
                score++;
            } else {
                incorrectResponses.push({
                    question: q.question,
                    selectedAnswer: userAnswer !== -1 ? q.options[userAnswer] : "No answer selected",
                    correctAnswer: q.options[q.correctAnswer]
                });
            }
        });

        const percentage = (score / questions.length) * 100;

        resultContainer.innerHTML = `
            <h3>Your Results</h3>
            <p>Score: ${score}/${questions.length} (${percentage.toFixed(2)}%)</p>
            <h4>Correct Answers:</h4>
            <ul>
                ${questions.map((q, index) => `
                    <li>Question ${index + 1}: ${q.options[q.correctAnswer]}</li>
                `).join('')}
            </ul>
            ${incorrectResponses.length > 0 ? `
                <h4>Incorrect Responses:</h4>
                <ul>
                    ${incorrectResponses.map(ir => `
                        <li>
                            <strong>Question:</strong> ${ir.question}<br>
                            <strong>Your Answer:</strong> ${ir.selectedAnswer}<br>
                            <strong>Correct Answer:</strong> ${ir.correctAnswer}
                        </li>
                    `).join('')}
                </ul>
            ` : ''}
        `;
    }

    createQuiz();
    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        gradeQuiz();
    });
});
