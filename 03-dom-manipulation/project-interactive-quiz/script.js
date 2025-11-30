// ===================================
// INTERACTIVE QUIZ GAME - MODULE 03 PROJECT
// ===================================

// QUIZ DATA - Array of question objects
const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "Hot Mail",
            "How To Make Lasagna",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        answers: [
            "/* */",
            "<!-- -->",
            "//",
            "#"
        ],
        correct: 2
    },
    {
        question: "What is the correct way to declare a JavaScript variable?",
        answers: [
            "variable x = 5;",
            "var x = 5;",
            "v x = 5;",
            "x = 5;"
        ],
        correct: 1
    },
    {
        question: "Which method is used to select an element by ID?",
        answers: [
            "document.querySelector('#id')",
            "document.getElementById('id')",
            "document.selectById('id')",
            "document.getElement('id')"
        ],
        correct: 1
    },
    {
        question: "What will 'typeof []' return in JavaScript?",
        answers: [
            "array",
            "object",
            "list",
            "undefined"
        ],
        correct: 1
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            "==",
            "===",
            "=",
            "->"
        ],
        correct: 2
    },
    {
        question: "What does DOM stand for?",
        answers: [
            "Document Object Model",
            "Data Object Model",
            "Digital Ordinance Model",
            "Document Oriented Mode"
        ],
        correct: 0
    },
    {
        question: "Which method adds an element as the last child?",
        answers: [
            "addChild()",
            "appendChild()",
            "insertChild()",
            "appendElement()"
        ],
        correct: 1
    },
    {
        question: "What is the correct syntax for an if statement?",
        answers: [
            "if x > 5 then",
            "if (x > 5)",
            "if x > 5:",
            "if [x > 5]"
        ],
        correct: 1
    },
    {
        question: "Which event occurs when a user clicks on an element?",
        answers: [
            "onchange",
            "onclick",
            "onmouseover",
            "onpress"
        ],
        correct: 1
    }
];

// STATE VARIABLES
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

// DOM ELEMENTS - Selection (Module 03 Lesson 1!)
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');

const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');

const questionEl = document.getElementById('question');
const answersContainer = document.getElementById('answersContainer');
const questionNumber = document.getElementById('questionNumber');
const progressFill = document.getElementById('progressFill');
const currentScoreEl = document.getElementById('currentScore');

const finalScoreEl = document.getElementById('finalScore');
const percentageEl = document.getElementById('percentage');
const resultMessageEl = document.getElementById('resultMessage');
const correctCountEl = document.getElementById('correctCount');
const wrongCountEl = document.getElementById('wrongCount');
const accuracyEl = document.getElementById('accuracy');
const scoreCircle = document.getElementById('scoreCircle');

// ===================================
// FUNCTIONS
// ===================================

/**
 * Start the quiz - Initialize and show first question
 */
function startQuiz() {
    // Hide start screen, show quiz screen
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    // Reset state
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    
    // Display first question
    displayQuestion();
    
    console.log('🎯 Quiz started!');
}

/**
 * Display current question and answers
 */
function displayQuestion() {
    // Get current question data
    const question = questions[currentQuestion];
    
    // Update question text (DOM Manipulation!)
    questionEl.textContent = question.question;
    
    // Update question number
    questionNumber.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    
    // Clear previous answers
    answersContainer.innerHTML = '';
    
    // Create answer buttons (DOM Manipulation!)
    question.answers.forEach((answer, index) => {
        // Create button element
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        
        // Add click event listener (Event Handling!)
        button.addEventListener('click', () => selectAnswer(index, button));
        
        // Add to container
        answersContainer.appendChild(button);
    });
    
    // Hide next button
    nextBtn.style.display = 'none';
    
    // Reset selected answer
    selectedAnswer = null;
    
    // Update progress bar
    updateProgress();
    
    console.log(`📝 Question ${currentQuestion + 1}: ${question.question}`);
}

/**
 * Handle answer selection
 */
function selectAnswer(answerIndex, buttonElement) {
    // Prevent selecting if already selected
    if (selectedAnswer !== null) return;
    
    // Store selected answer
    selectedAnswer = answerIndex;
    
    // Get all answer buttons
    const allButtons = answersContainer.querySelectorAll('.answer-btn');
    
    // Disable all buttons
    allButtons.forEach(btn => {
        btn.disabled = true;
    });
    
    // Check if answer is correct
    const question = questions[currentQuestion];
    const isCorrect = answerIndex === question.correct;
    
    if (isCorrect) {
        // Correct answer!
        buttonElement.classList.add('correct');
        score++;
        currentScoreEl.textContent = score;
        console.log('✅ Correct!');
    } else {
        // Wrong answer
        buttonElement.classList.add('wrong');
        
        // Show correct answer
        allButtons[question.correct].classList.add('correct');
        console.log('❌ Wrong! Correct answer was:', question.answers[question.correct]);
    }
    
    // Show next button
    nextBtn.style.display = 'inline-block';
}

/**
 * Move to next question or show results
 */
function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        // Show next question
        displayQuestion();
    } else {
        // Quiz finished, show results
        showResults();
    }
}

/**
 * Update progress bar
 */
function updateProgress() {
    const progress = ((currentQuestion) / questions.length) * 100;
    progressFill.style.width = progress + '%';
}

/**
 * Show final results screen
 */
function showResults() {
    // Hide quiz screen, show results screen
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    // Calculate statistics
    const totalQuestions = questions.length;
    const correctAnswers = score;
    const wrongAnswers = totalQuestions - score;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Update score display
    finalScoreEl.textContent = `${score}/${totalQuestions}`;
    percentageEl.textContent = percentage + '%';
    
    // Update details
    correctCountEl.textContent = correctAnswers;
    wrongCountEl.textContent = wrongAnswers;
    accuracyEl.textContent = percentage + '%';
    
    // Determine result message based on score
    let message = '';
    let messageClass = '';
    
    if (percentage >= 90) {
        message = '🎉 Outstanding! You\'re a JavaScript master!';
        messageClass = 'excellent';
    } else if (percentage >= 70) {
        message = '👏 Great job! You know your JavaScript!';
        messageClass = 'good';
    } else if (percentage >= 50) {
        message = '👍 Not bad! Keep practicing!';
        messageClass = 'fair';
    } else {
        message = '📚 Keep learning! You\'ll get better!';
        messageClass = 'poor';
    }
    
    resultMessageEl.textContent = message;
    resultMessageEl.className = 'result-message ' + messageClass;
    
    // Animate score circle
    animateScoreCircle(percentage);
    
    console.log('🏆 Quiz completed!');
    console.log(`Final Score: ${score}/${totalQuestions} (${percentage}%)`);
}

/**
 * Animate the circular progress indicator
 */
function animateScoreCircle(percentage) {
    const circle = scoreCircle;
    const radius = 90;
    const circumference = 2 * Math.PI * radius;
    
    // Calculate dash offset based on percentage
    const offset = circumference - (percentage / 100) * circumference;
    
    // Apply animation
    setTimeout(() => {
        circle.style.strokeDashoffset = offset;
    }, 100);
}

/**
 * Restart the quiz
 */
function restartQuiz() {
    // Hide results screen, show start screen
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
    
    // Reset progress bar
    progressFill.style.width = '0%';
    
    // Reset score display
    currentScoreEl.textContent = '0';
    
    // Reset score circle
    scoreCircle.style.strokeDashoffset = '565';
    
    console.log('🔄 Quiz restarted!');
}

// ===================================
// EVENT LISTENERS (Module 03 Lesson 3!)
// ===================================

// Start quiz button
startBtn.addEventListener('click', startQuiz);

// Next question button
nextBtn.addEventListener('click', nextQuestion);

// Restart quiz button
restartBtn.addEventListener('click', restartQuiz);

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press Enter to start quiz from start screen
    if (startScreen.classList.contains('active') && e.key === 'Enter') {
        startQuiz();
    }
    
    // Press Enter to go to next question
    if (quizScreen.classList.contains('active') && e.key === 'Enter' && selectedAnswer !== null) {
        nextQuestion();
    }
    
    // Press numbers 1-4 to select answer
    if (quizScreen.classList.contains('active') && selectedAnswer === null) {
        const num = parseInt(e.key);
        if (num >= 1 && num <= 4) {
            const buttons = answersContainer.querySelectorAll('.answer-btn');
            if (buttons[num - 1]) {
                buttons[num - 1].click();
            }
        }
    }
});

// ===================================
// INITIALIZATION
// ===================================

console.log('🎯 Interactive Quiz Game Loaded!');
console.log('===================================');
console.log('Total Questions:', questions.length);
console.log('Features:');
console.log('  ✓ Multiple choice questions');
console.log('  ✓ Instant feedback');
console.log('  ✓ Score tracking');
console.log('  ✓ Progress bar');
console.log('  ✓ Detailed results');
console.log('  ✓ Keyboard shortcuts');
console.log('===================================');
console.log('Keyboard Shortcuts:');
console.log('  - Press Enter to start quiz');
console.log('  - Press 1-4 to select answer');
console.log('  - Press Enter to go to next question');
console.log('===================================');

// ===================================
// MODULE 03 CONCEPTS DEMONSTRATED
// ===================================

/*
DOM SELECTION (Lesson 1):
- getElementById() - Select elements by ID
- querySelector() - Select with CSS selectors
- querySelectorAll() - Select multiple elements

DOM MANIPULATION (Lesson 2):
- createElement() - Create new elements
- textContent - Set text content
- innerHTML - Clear containers
- classList.add/remove - Manage classes
- appendChild() - Add elements to DOM
- style property - Modify CSS

EVENT HANDLING (Lesson 3):
- addEventListener() - Attach event listeners
- Event object - Access event data
- click events - Handle button clicks
- keydown events - Keyboard shortcuts
- Event delegation - Handle dynamic elements

STATE MANAGEMENT:
- Track current question
- Track score
- Track selected answer
- Update UI based on state

ARRAY & OBJECT USAGE:
- Array of question objects
- forEach() to iterate
- Object property access
- Array indexing

FUNCTIONS:
- Organize code into reusable functions
- Parameters and return values
- Function calls and flow control

CONDITIONAL LOGIC:
- if/else for answer checking
- Switch cases for result messages
- Ternary operators for quick checks

This quiz game is a complete demonstration of
everything learned in Module 03: DOM Manipulation!
*/