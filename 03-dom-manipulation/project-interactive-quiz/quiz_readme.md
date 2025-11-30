# Project 03: Interactive Quiz Game 🎯

## What You'll Build

A fully functional quiz application that can:
- ✅ Display questions with multiple choice answers
- ✅ Track correct/incorrect answers
- ✅ Show progress through quiz
- ✅ Calculate and display final score
- ✅ Allow quiz restart
- ✅ Provide visual feedback for answers
- ✅ Timer for each question
- ✅ Beautiful, responsive design

---

## What You'll Learn

This project uses EVERYTHING from Module 03:
- ✅ DOM Selection (`querySelector`, `getElementById`)
- ✅ DOM Manipulation (`createElement`, `appendChild`, `classList`)
- ✅ Event Handling (`addEventListener`, `click`, `submit`)
- ✅ Event Delegation (handling dynamic elements)
- ✅ Updating content dynamically
- ✅ Managing application state
- ✅ Working with arrays of objects

---

## How It Works

### Data Structure:
```javascript
let questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "Hot Mail",
            "How To Make Lasagna",
            "Home Tool Markup Language"
        ],
        correct: 0  // Index of correct answer
    },
    // More questions...
];
```

### User Flow:
1. Start quiz by clicking "Start Quiz" button
2. Read question and select an answer
3. Click "Next" to move to next question
4. See visual feedback (green for correct, red for wrong)
5. View progress bar showing completion
6. See final score with percentage
7. Restart quiz to try again

---

## File Structure

```
project-interactive-quiz/
├── index.html      ← Quiz structure
├── style.css       ← Beautiful styling  
├── script.js       ← Quiz logic
└── README.md       ← This file!
```

---

## Features Breakdown

### 1. Start Screen
- Welcome message
- Quiz description
- Start button
- Displays when quiz loads

### 2. Question Display
- Question number (e.g., "Question 1 of 10")
- Question text
- Four answer options
- Next button (appears after answer selected)
- Progress bar

### 3. Answer Selection
- Click answer to select
- Visual feedback (highlight selected)
- Disable selection after choosing
- Show correct/wrong colors
- Reveal correct answer if wrong

### 4. Progress Tracking
- Current question number
- Total questions
- Visual progress bar
- Questions answered count

### 5. Timer (Optional)
- Countdown timer per question
- Auto-move to next if time runs out
- Visual warning when time low

### 6. Results Screen
- Total score (X out of Y)
- Percentage score
- Performance message
- Restart button
- Review wrong answers option

---

## Code Breakdown

### Key Variables
```javascript
let questions = [];          // Array of question objects
let currentQuestion = 0;     // Current question index
let score = 0;               // Total correct answers
let selectedAnswer = null;   // User's selected answer
let quizState = 'start';     // 'start', 'playing', 'finished'
```

### Key Functions
```javascript
startQuiz()              // Initialize quiz
displayQuestion()        // Show current question
selectAnswer(index)      // Handle answer selection
checkAnswer()            // Verify if answer correct
nextQuestion()           // Move to next question
showResults()            // Display final score
restartQuiz()            // Reset quiz to start
updateProgress()         // Update progress bar
```

### How Question Display Works
```javascript
function displayQuestion() {
    // 1. Get current question data
    let question = questions[currentQuestion];
    
    // 2. Update question text
    questionElement.textContent = question.question;
    
    // 3. Clear previous answers
    answersContainer.innerHTML = '';
    
    // 4. Create answer buttons
    question.answers.forEach((answer, index) => {
        let button = createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(button);
    });
    
    // 5. Update progress
    updateProgress();
}
```

---

## Testing Your Quiz

### Test 1: Start Quiz
- Click "Start Quiz"
- Should show first question ✅

### Test 2: Answer Selection
- Click an answer
- Should highlight selected ✅
- Other answers should be disabled ✅

### Test 3: Correct Answer
- Select correct answer
- Should turn green ✅
- Score should increase ✅

### Test 4: Wrong Answer
- Select wrong answer
- Should turn red ✅
- Correct answer should show green ✅

### Test 5: Next Question
- Click "Next"
- Should show next question ✅
- Progress bar should update ✅

### Test 6: Complete Quiz
- Answer all questions
- Should show results screen ✅
- Should display score and percentage ✅

### Test 7: Restart Quiz
- Click "Restart Quiz"
- Should reset to start screen ✅
- Score should be 0 ✅

### Test 8: Progress Bar
- Progress should update each question ✅
- Should show percentage complete ✅

---

## How to Run

1. Open `index.html` in browser
2. Click "Start Quiz"
3. Answer questions
4. See your score!

---

## Customization Ideas

Once it's working, try:
1. **Add more questions** - Create 20+ questions
2. **Add categories** - Science, History, Sports, etc.
3. **Add difficulty levels** - Easy, Medium, Hard
4. **Add timer** - Countdown for each question
5. **Add sound effects** - For correct/wrong answers
6. **Save high scores** - Use localStorage
7. **Add hints** - 50/50 or skip options
8. **Add images** - Visual questions
9. **Leaderboard** - Track multiple players
10. **Share results** - Social media integration

---

## Common Issues & Fixes

### Issue 1: Questions not displaying
**Check:** Is `displayQuestion()` being called?
**Fix:** Call it in `startQuiz()` function

### Issue 2: Can select multiple answers
**Check:** Are buttons being disabled after selection?
**Fix:** Add `disabled` attribute after selection

### Issue 3: Score not updating
**Check:** Is `score++` in the right place?
**Fix:** Increment score in `checkAnswer()` when correct

### Issue 4: Progress bar not working
**Check:** Is width calculated correctly?
**Fix:** `width = (current / total) * 100 + '%'`

### Issue 5: Can't restart quiz
**Check:** Are all variables being reset?
**Fix:** Reset `currentQuestion`, `score`, `selectedAnswer`

---

## What You Learned

By building this quiz game, you practiced:
- ✅ DOM Selection - Selecting elements to manipulate
- ✅ DOM Manipulation - Creating and updating elements
- ✅ Event Handling - Responding to user actions
- ✅ Event Delegation - Handling dynamic content
- ✅ State Management - Tracking quiz progress
- ✅ Arrays & Objects - Managing quiz data
- ✅ Functions - Organizing code logic
- ✅ Conditional Logic - Checking answers, showing results

---

## Module 03 Concepts Used

### DOM Selection:
```javascript
let questionEl = document.getElementById('question');
let answers = document.querySelectorAll('.answer');
let nextBtn = document.querySelector('.next-btn');
```

### DOM Manipulation:
```javascript
// Create elements
let button = document.createElement('button');
button.textContent = answer;
button.classList.add('answer-btn');

// Append to DOM
container.appendChild(button);

// Update content
scoreDisplay.textContent = `Score: ${score}`;

// Modify classes
button.classList.add('correct');
button.classList.remove('selected');
```

### Event Handling:
```javascript
// Button clicks
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);

// Answer selection
answersContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('answer-btn')) {
        selectAnswer(e.target);
    }
});
```

---

## Next Steps

After completing this quiz app:
1. ✅ Test all features thoroughly
2. ✅ Add your own questions
3. ✅ Try the customization ideas
4. ✅ Show it to friends and family!
5. ✅ Move to Module 04: Advanced Functions

---

## Congratulations! 🎉

You just built an interactive quiz game! This demonstrates you understand:
- How to select and manipulate DOM elements
- How to handle user interactions
- How to manage application state
- How to build dynamic, interactive applications

**This is a portfolio-worthy project!**

---

## 🎯 Bonus Challenges

### Challenge 1: Timed Quiz
Add a countdown timer:
- 30 seconds per question
- Auto-advance when time's up
- Show time remaining
- Bonus points for fast answers

### Challenge 2: Question Categories
Organize questions by category:
- Let user choose category
- Track score per category
- Show category in question display

### Challenge 3: Difficulty Levels
Add difficulty selection:
- Easy: 4 questions, 60 sec each
- Medium: 8 questions, 45 sec each
- Hard: 12 questions, 30 sec each

### Challenge 4: Lifelines
Add help options:
- 50/50: Remove 2 wrong answers
- Skip: Move to next question
- Hint: Show partial answer
- Each usable once per quiz

---

**Ready for Module 04?** We'll dive into Advanced Functions, Closures, and Callbacks!

**Keep building!** 💪