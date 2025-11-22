# Module 01 - Lesson 4: Functions Basics

## What Are Functions?

Functions are **reusable blocks of code** that perform a specific task. Think of them as mini-programs!

**Why use functions?**
- ✅ Reuse code (write once, use many times)
- ✅ Organize code better
- ✅ Make code easier to read
- ✅ Easier to fix bugs

---

## 1. Function Declaration

### Basic Syntax
```javascript
function functionName() {
    // Code to run
}

// Call (run) the function
functionName();
```

### Example
```javascript
function sayHello() {
    console.log("Hello, World!");
}

// Call the function
sayHello();  // Output: Hello, World!
sayHello();  // Output: Hello, World!
sayHello();  // Output: Hello, World!
```

**You can call it as many times as you want!**

---

## 2. Functions with Parameters

Pass data INTO functions!

### Syntax
```javascript
function functionName(parameter1, parameter2) {
    // Use parameters here
}

functionName(value1, value2);
```

### Examples
```javascript
// Example 1: Greet someone
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Ifeanyi");  // Hello, Ifeanyi!
greet("John");     // Hello, John!
greet("Sarah");    // Hello, Sarah!

// Example 2: Add two numbers
function add(a, b) {
    console.log(a + b);
}

add(5, 3);   // 8
add(10, 20); // 30
add(7, 2);   // 9

// Example 3: Calculate area
function calculateArea(width, height) {
    let area = width * height;
    console.log("Area:", area);
}

calculateArea(5, 10);  // Area: 50
calculateArea(8, 3);   // Area: 24
```

---

## 3. Return Values

Functions can send data BACK!

### Syntax
```javascript
function functionName() {
    return value;
}

let result = functionName();
```

### Examples
```javascript
// Example 1: Return a sum
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log(sum);  // 8

let total = add(10, 20);
console.log(total);  // 30

// Example 2: Calculate discount
function calculateDiscount(price, discount) {
    let discountAmount = price * (discount / 100);
    return price - discountAmount;
}

let finalPrice = calculateDiscount(100, 20);
console.log("Final price:", finalPrice);  // 80

// Example 3: Check if even
function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4));  // true
console.log(isEven(7));  // false
```

### Important: Return stops the function!
```javascript
function example() {
    console.log("Before return");
    return "Done";
    console.log("After return");  // This NEVER runs!
}

example();
// Output: Before return
```

---

## 4. Default Parameters

Set default values for parameters!

```javascript
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greet("Ifeanyi");  // Hello, Ifeanyi!
greet();           // Hello, Guest! (uses default)

// Example 2: Calculate with tax
function calculateTotal(price, tax = 0.1) {
    return price + (price * tax);
}

console.log(calculateTotal(100));      // 110 (10% default tax)
console.log(calculateTotal(100, 0.2)); // 120 (20% custom tax)
```

---

## 5. Function Expressions

Store functions in variables!

```javascript
const greet = function(name) {
    console.log("Hello, " + name + "!");
};

greet("Ifeanyi");  // Hello, Ifeanyi!

// Example 2: Calculator
const multiply = function(a, b) {
    return a * b;
};

let result = multiply(5, 4);
console.log(result);  // 20
```

---

## 6. Arrow Functions (Modern Way!)

Shorter syntax for functions.

### Syntax
```javascript
const functionName = (parameters) => {
    // Code
};
```

### Examples
```javascript
// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function (same thing!)
const add = (a, b) => {
    return a + b;
};

// Even shorter (one line, auto return)
const add = (a, b) => a + b;

console.log(add(5, 3));  // 8
```

### More Arrow Function Examples
```javascript
// One parameter (no parentheses needed)
const square = x => x * x;
console.log(square(5));  // 25

// No parameters (need parentheses)
const sayHi = () => console.log("Hi!");
sayHi();  // Hi!

// Multiple lines (need braces and return)
const greet = (name) => {
    let message = "Hello, " + name + "!";
    return message;
};
console.log(greet("Ifeanyi"));  // Hello, Ifeanyi!
```

---

## Real-World Examples

### Example 1: Temperature Converter
```javascript
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

console.log(celsiusToFahrenheit(25));   // 77
console.log(fahrenheitToCelsius(77));   // 25
```

### Example 2: Age Calculator
```javascript
function calculateAge(birthYear) {
    const currentYear = 2025;
    return currentYear - birthYear;
}

let age = calculateAge(2000);
console.log("Age:", age);  // 25
```

### Example 3: Discount Calculator
```javascript
function applyDiscount(price, discountPercent) {
    let discount = price * (discountPercent / 100);
    let finalPrice = price - discount;
    return finalPrice;
}

console.log(applyDiscount(100, 20));  // 80
console.log(applyDiscount(50, 10));   // 45
```

### Example 4: Validate Email
```javascript
function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}

console.log(isValidEmail("ifeanyi@example.com"));  // true
console.log(isValidEmail("invalid.email"));        // false
```

### Example 5: Calculate BMI
```javascript
function calculateBMI(weight, height) {
    let bmi = weight / (height ** 2);
    return bmi.toFixed(2);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

let bmi = calculateBMI(70, 1.75);
let category = getBMICategory(bmi);
console.log("BMI:", bmi);           // 22.86
console.log("Category:", category); // Normal
```

---

## Function Scope

Variables inside functions are **local** (only exist inside the function).

```javascript
function example() {
    let localVar = "I'm local";
    console.log(localVar);  // Works!
}

example();
// console.log(localVar);  // ERROR! localVar doesn't exist here

// Global variables
let globalVar = "I'm global";

function showGlobal() {
    console.log(globalVar);  // Works! Can access global
}

showGlobal();  // I'm global
```

---

## Functions Calling Other Functions

```javascript
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function calculate(x, y) {
    let sum = add(x, y);
    let product = multiply(x, y);
    console.log("Sum:", sum);
    console.log("Product:", product);
}

calculate(5, 3);
// Sum: 8
// Product: 15
```

---

## Hands-On Practice

Create `01-fundamentals/exercises/functions-practice.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Functions Practice</title>
</head>
<body>
    <h1>Check the Console (F12)</h1>

    <script>
        // Challenge 1: Basic function
        function introduce(name, age) {
            console.log(`Hi, I'm ${name} and I'm ${age} years old.`);
        }

        introduce("Ifeanyi", 25);

        // Challenge 2: Return value
        function getFullName(firstName, lastName) {
            return firstName + " " + lastName;
        }

        let fullName = getFullName("Ifeanyi", "Stanley");
        console.log(fullName);

        // Challenge 3: Math functions
        function add(a, b) {
            return a + b;
        }

        function subtract(a, b) {
            return a - b;
        }

        function multiply(a, b) {
            return a * b;
        }

        function divide(a, b) {
            if (b === 0) {
                return "Cannot divide by zero";
            }
            return a / b;
        }

        console.log("5 + 3 =", add(5, 3));
        console.log("10 - 4 =", subtract(10, 4));
        console.log("6 * 7 =", multiply(6, 7));
        console.log("20 / 4 =", divide(20, 4));

        // Challenge 4: Arrow functions
        const square = (x) => x * x;
        const cube = (x) => x * x * x;

        console.log("5 squared:", square(5));
        console.log("3 cubed:", cube(3));

        // Challenge 5: Temperature converter
        const celsiusToFahrenheit = (c) => (c * 9/5) + 32;
        
        console.log("25°C is", celsiusToFahrenheit(25), "°F");

        // Challenge 6: Discount calculator
        function calculateFinalPrice(price, discountPercent) {
            let discount = price * (discountPercent / 100);
            return price - discount;
        }

        console.log("$100 with 20% off:", calculateFinalPrice(100, 20));
    </script>
</body>
</html>
```

---

## Exercise Challenges

### Challenge 1: Greeting Function
```javascript
// Create a function that:
// - Takes name and time of day (morning/afternoon/evening)
// - Returns appropriate greeting
// Example: greet("Ifeanyi", "morning") → "Good morning, Ifeanyi!"
```

### Challenge 2: Circle Calculator
```javascript
// Create two functions:
// calculateArea(radius) - returns area of circle
// calculateCircumference(radius) - returns circumference
// Use Math.PI
```

### Challenge 3: Grade Calculator
```javascript
// Create a function that:
// - Takes a score (0-100)
// - Returns grade letter (A, B, C, D, F)
```

### Challenge 4: Odd or Even
```javascript
// Create a function that:
// - Takes a number
// - Returns "Even" or "Odd"
```

---

## Common Mistakes

### ❌ Mistake 1: Forgetting to return
```javascript
function add(a, b) {
    a + b;  // WRONG! Not returning
}
let result = add(5, 3);
console.log(result);  // undefined
```
**Fix:** Add `return`

### ❌ Mistake 2: Calling before defining (with function expressions)
```javascript
greet();  // ERROR!

const greet = function() {
    console.log("Hello");
};
```
**Fix:** Define function first, then call

### ❌ Mistake 3: Wrong number of parameters
```javascript
function add(a, b) {
    return a + b;
}

add(5);  // NaN (b is undefined)
```
**Fix:** Pass all required parameters

---

## Quick Reference

```javascript
// Function declaration
function name(params) {
    return value;
}

// Function expression
const name = function(params) {
    return value;
};

// Arrow function
const name = (params) => value;

// Arrow function (multiple lines)
const name = (params) => {
    return value;
};

// Call function
name(arguments);

// Default parameters
function name(param = defaultValue) { }
```

---

## What's Next?

Congratulations! You've learned the fundamentals of JavaScript! 🎉

**Now it's time to BUILD!** Let's create your first project: a **Calculator App** using everything you've learned!

**Ready?** Go to `01-fundamentals/project-calculator/` folder!

---

## Key Takeaways ✓

- [ ] Functions are reusable blocks of code
- [ ] Parameters pass data IN
- [ ] Return sends data OUT
- [ ] Arrow functions are shorter syntax
- [ ] Functions can call other functions
- [ ] Variables inside functions are local

**Now let's build something real!** 💪
