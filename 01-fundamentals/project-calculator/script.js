// ===================================
// CALCULATOR APP - MODULE 01 PROJECT
// ===================================

// VARIABLES - Storing calculator state
let currentDisplay = '0';
let previousNumber = '';
let operation = null;
let shouldResetDisplay = false;

// Get display elements
const currentDisplayElement = document.getElementById('currentDisplay');
const previousDisplayElement = document.getElementById('previousDisplay');

// ===================================
// FUNCTIONS
// ===================================

/**
 * Append a number or decimal to the display
 */
function appendNumber(number) {
    // If we just calculated, start fresh
    if (shouldResetDisplay) {
        currentDisplay = '';
        shouldResetDisplay = false;
    }

    // Prevent multiple decimals
    if (number === '.' && currentDisplay.includes('.')) {
        return;
    }

    // If display is 0, replace it (unless adding decimal)
    if (currentDisplay === '0' && number !== '.') {
        currentDisplay = number;
    } else {
        currentDisplay += number;
    }

    updateDisplay();
}

/**
 * Set the operation (+, -, *, /)
 */
function setOperation(op) {
    // If we already have an operation, calculate first
    if (operation !== null && !shouldResetDisplay) {
        calculate();
    }

    operation = op;
    previousNumber = currentDisplay;
    shouldResetDisplay = true;

    // Show previous number and operation on display
    updatePreviousDisplay();
}

/**
 * Calculate the result
 */
function calculate() {
    // Need both numbers and an operation
    if (operation === null || previousNumber === '') {
        return;
    }

    // Convert strings to numbers
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentDisplay);
    let result = 0;

    // Perform calculation based on operation
    if (operation === '+') {
        result = prev + current;
    } else if (operation === '-') {
        result = prev - current;
    } else if (operation === '*') {
        result = prev * current;
    } else if (operation === '/') {
        // Check for division by zero
        if (current === 0) {
            currentDisplay = 'Error';
            currentDisplayElement.classList.add('error');
            setTimeout(() => {
                clearAll();
                currentDisplayElement.classList.remove('error');
            }, 1500);
            return;
        }
        result = prev / current;
    }

    // Round to avoid floating point errors
    // Example: 0.1 + 0.2 = 0.30000000000000004
    result = Math.round(result * 100000000) / 100000000;

    // Update display
    currentDisplay = result.toString();
    operation = null;
    previousNumber = '';
    shouldResetDisplay = true;

    updateDisplay();
    updatePreviousDisplay();

    // Add flash animation
    currentDisplayElement.classList.add('display-flash');
    setTimeout(() => {
        currentDisplayElement.classList.remove('display-flash');
    }, 300);
}

/**
 * Clear everything and reset calculator
 */
function clearAll() {
    currentDisplay = '0';
    previousNumber = '';
    operation = null;
    shouldResetDisplay = false;
    updateDisplay();
    updatePreviousDisplay();
}

/**
 * Delete the last digit
 */
function deleteLast() {
    if (shouldResetDisplay) {
        return;
    }

    // Remove last character
    currentDisplay = currentDisplay.slice(0, -1);

    // If nothing left, show 0
    if (currentDisplay === '' || currentDisplay === '-') {
        currentDisplay = '0';
    }

    updateDisplay();
}

/**
 * Update the current display
 */
function updateDisplay() {
    // Limit display to 12 characters
    let displayText = currentDisplay;
    if (displayText.length > 12) {
        displayText = parseFloat(displayText).toExponential(6);
    }
    currentDisplayElement.textContent = displayText;
}

/**
 * Update the previous display (shows previous number and operation)
 */
function updatePreviousDisplay() {
    if (operation !== null && previousNumber !== '') {
        const operatorSymbol = operation === '*' ? '×' : operation;
        previousDisplayElement.textContent = `${previousNumber} ${operatorSymbol}`;
    } else {
        previousDisplayElement.textContent = '';
    }
}

// ===================================
// KEYBOARD SUPPORT (BONUS!)
// ===================================

document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Numbers and decimal
    if ((key >= '0' && key <= '9') || key === '.') {
        appendNumber(key);
    }
    // Operators
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        setOperation(key);
    }
    // Enter or equals
    else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    }
    // Escape or C
    else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearAll();
    }
    // Backspace or Delete
    else if (key === 'Backspace' || key === 'Delete') {
        deleteLast();
    }
});

// ===================================
// CONSOLE LOGS (FOR LEARNING)
// ===================================

console.log("🧮 Calculator Loaded!");
console.log("===================================");
console.log("Try clicking the buttons or use your keyboard!");
console.log("===================================");
console.log("Keyboard Shortcuts:");
console.log("- Numbers: 0-9");
console.log("- Operators: + - * /");
console.log("- Calculate: Enter or =");
console.log("- Clear: Escape or C");
console.log("- Delete: Backspace or Delete");
console.log("===================================");

// ===================================
// EXPLANATION OF KEY CONCEPTS
// ===================================

/*
VARIABLES:
- currentDisplay: What shows on the screen
- previousNumber: The first number entered
- operation: Which math operation to perform
- shouldResetDisplay: Whether to clear display on next input

DATA TYPES:
- Strings: currentDisplay starts as string
- Numbers: Converted with parseFloat() for calculations
- Booleans: shouldResetDisplay is true/false
- Null: operation starts as null (no operation yet)

OPERATORS:
- Arithmetic: +, -, *, /
- Comparison: === to check operation type
- Logical: && in conditions

CONTROL FLOW:
- if/else: Check which operation to perform
- if: Prevent multiple decimals
- Multiple if/else if: Different keyboard keys

FUNCTIONS:
- appendNumber(): Add digits to display
- setOperation(): Store which math operation
- calculate(): Do the actual math
- clearAll(): Reset everything
- deleteLast(): Remove last digit
- updateDisplay(): Show current number
- updatePreviousDisplay(): Show previous number and operator

This calculator uses EVERYTHING from Module 01!
*/
