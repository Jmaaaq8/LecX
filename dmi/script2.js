const quizData = [
    //html
    {
        question: "What is the purpose of the <!DOCTYPE html> declaration in an HTML document?",
        a: "To define the main structure of the page",
        b: "To declare the HTML version and tell the browser the type of document",
        c: "To style the webpage with CSS",
        d: "To add JavaScript functionality to the page",
        correct: "To declare the HTML version and tell the browser the type of document",
    },
    {
        question: "Which tag is used to define a paragraph in HTML?",
        a: "<para>",
        b: "<h1>",
        c: "<p>",
        d: "<div>",
        correct: "<p>",
    },
    {
        question: "In HTML, which statement about nested elements is correct?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborghinis",
        correct: "Hypertext Markup Language",
    },
    {
        question: "In HTML, which statement about nested elements is correct?",
        a: "Nested elements must always have unique IDs",
        b: "Nested elements should not contain any other elements inside them",
        c: "An element can be placed within another element to create a complex structure",
        d: "Elements cannot be nested in HTML",
        correct: "An element can be placed within another element to create a complex structure",
    },
    {
        question: "Which of the following is an empty HTML element?",
        a: "<p>",
        b: "<h1>",
        c: "<img>",
        d: "<div>",
        correct: "<img>",
    },
    {
        question: "What is the purpose of the alt attribute in an <img> tag?",
        a: "To specify the image file location",
        b: "To add alternative text if the image fails to load",
        c: "To define the image size",
        d: "To link the image to another webpage",
        correct: "To add alternative text if the image fails to load",
    },
    {
        question: "Which attribute is used to set the destination URL for an anchor (<a>) tag?",
        a: "src",
        b: "link",
        c: "href",
        d: "target",
        correct: "href",
    },
    {
        question: "How would you change the background color of the entire webpage to light blue using inline styles?",
        a: "<body color= lightblue>",
        b: "<body background=lightblue>",
        c: "<body style=background-color: lightblue;>",
        d: "<background color=lightblue>",
        correct: "<body style=background-color: lightblue;>",
    },

    //css

    {
        question: "In a CSS Grid layout, which property defines the number and size of rows in a grid container?",
        a: "grid-template-columns",
        b: "grid-template-rows",
        c: "justify-content",
        d: "align-items",
        correct: "grid-template-rows",
    },
    {
        question: "Which property is used to control how flex items are aligned along the main axis in a flex container?",
        a: "align-items",
        b: "justify-content",
        c: "grid-gap",
        d: "float",
        correct: "justify-content",
    },
    {
        question: "What CSS property should you use to create a navigation bar where items are displayed horizontally?",
        a: "display: inline;",
        b: "display: grid;",
        c: "display: flex;",
        d: "display: block;",
        correct: "display: flex;",
    },
    {
        question: "Which CSS property is responsible for defining the spacing between rows and columns in a CSS Grid layout?",
        a: "grid-gap",
        b: "padding",
        c: "margin",
        d: "spacing",
        correct: "grid-gap",
    },
    {
        question: "Which CSS property is used to align grid items within each cell along the vertical (block) axis?",
        a: "justify-items",
        b: "align-content",
        c: "align-items",
        d: "justify-content",
        correct: "align-items",
    },
    {
        question: "In CSS, what does setting the position property to sticky do?",
        a: "Keeps the element in the same place within the viewport.",
        b: "Allows the element to scroll with the page until it reaches a certain position, then sticks.",
        c: "Positions the element relative to its nearest parent.",
        d: "Floats the element to the right.",
        correct: "Allows the element to scroll with the page until it reaches a certain position, then sticks.",
    },
    {
        question: "Which CSS property would you use to make sure an element never exceeds a certain width, no matter the viewport size?",
        a: "width",
        b: "max-width",
        c: "min-width",
        d: "overflow",
        correct: "max-width",
    },
    {
        question: "In a CSS Grid layout, what is the purpose of grid-template-areas?",
        a: "Defines a shorthand way to specify both rows and columns.",
        b: "Allows you to name specific grid items and place them in specific areas.",
        c: "Controls the space between grid items.",
        d: "Specifies the alignment of items within grid cells.",
        correct: "Allows you to name specific grid items and place them in specific areas.",
    },

    //java

    {
        question: "Which JavaScript property is used to change the content within an HTML element?",
        a: "innerContent",
        b: "textContent",
        c: "innerHTML",
        d: "align-items",
        correct: "innerHTML",
    },
    {
        question: "In JavaScript, which keyword should be used to declare a block-scoped variable that can be reassigned?",
        a: "var",
        b: "const",
        c: "let",
        d: "float",
        correct: "scope",
    },
    {
        question: "Which of the following is a comparison operator in JavaScript?",
        a: "=",
        b: "===",
        c: "&&",
        d: "+=",
        correct: "===",
    },
    {
        question: "How would you start a single-line comment in JavaScript?",
        a: "/*",
        b: "<!--",
        c: "#",
        d: "//",
        correct: "//",
    },
    {
        question: "Which of the following is NOT a valid JavaScript identifier?",
        a: "my_variable",
        b: "$value",
        c: "2name",
        d: "name2",
        correct: "2name",
    },
    {
        question: "What is the purpose of the return keyword in JavaScript?",
        a: "To stop a function",
        b: "To exit a loop",
        c: "To send a value back from a function",
        d: "To define a variable",
        correct: "To send a value back from a function",
    },
    {
        question: "Which of these JavaScript keywords is used to define a function?",
        a: "def",
        b: "func",
        c: "function",
        d: "fn",
        correct: "function",
    },
    {
        question: "In JavaScript, which operator is used for the logical AND operation?",
        a: "&",
        b: "|",
        c: "&&",
        d: "||",
        correct: "&&",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let shuffledOptions = [];
let questionsAnswered = 0;  // Track answered questions

// Shuffle quiz questions before starting
const shuffledQuizData = shuffle(quizData).slice(0, 10); // Shuffle and limit to 10 questions

loadQuiz();

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // Swap elements
    }
    return array;
}

function loadQuiz() {
    deselectAnswers();
    resetButtonColor();

    const currentQuizData = shuffledQuizData[currentQuiz];
    
    // Shuffle answer options for each question
    shuffledOptions = shuffle([
        { text: currentQuizData.a },
        { text: currentQuizData.b },
        { text: currentQuizData.c },
        { text: currentQuizData.d }
    ]);

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = shuffledOptions[0].text;
    b_text.innerText = shuffledOptions[1].text;
    c_text.innerText = shuffledOptions[2].text;
    d_text.innerText = shuffledOptions[3].text;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answerText;
    answerEls.forEach((answerEl, index) => {
        if (answerEl.checked) {
            // Get the text of the selected answer from the shuffled options
            switch (index) {
                case 0:
                    answerText = a_text.innerText;
                    break;
                case 1:
                    answerText = b_text.innerText;
                    break;
                case 2:
                    answerText = c_text.innerText;
                    break;
                case 3:
                    answerText = d_text.innerText;
                    break;
            }
        }
    });
    return answerText;
}

function resetButtonColor() {
    submitBtn.style.backgroundColor = ''; // Reset to default button color
}

submitBtn.addEventListener('click', () => {
    const selectedAnswer = getSelected();
    if (selectedAnswer) {
        const currentQuizData = shuffledQuizData[currentQuiz];

        if (selectedAnswer === currentQuizData.correct) {
            score++;
        } else {
            submitBtn.style.backgroundColor = 'red';  // Turn the submit button red if the answer is wrong
        }

        questionsAnswered++;  // Increment questions answered

        setTimeout(() => {
            if (questionsAnswered < 10 && currentQuiz < shuffledQuizData.length - 1) {
                currentQuiz++;
                loadQuiz();
            } else {
                // Display final score after 10 questions
                quiz.innerHTML = `
                    <h2>You answered ${score}/10 questions correctly</h2>
                    <button onclick="location.reload()">Reload</button>
                `;
            }
        }, 1000); // 1 second delay
    }
});
