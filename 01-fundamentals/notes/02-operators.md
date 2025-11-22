# Module 01 - Lesson 2: Operators

## What Are Operators?

Operators are symbols that perform operations on values and variables. Think of them as **action words** in JavaScript!

---

## 1. Arithmetic Operators (Math!)

### Basic Math Operations

```javascript
let a = 10;
let b = 3;

// Addition
let sum = a + b;
console.log(sum);  // 13

// Subtraction
let difference = a - b;
console.log(difference);  // 7

// Multiplication
let product = a * b;
console.log(product);  // 30

// Division
let quotient = a / b;
console.log(quotient);  // 3.3333...

// Modulus (Remainder)
let remainder = a % b;
console.log(remainder);  // 1 (10 divided by 3 = 3 remainder 1)

// Exponentiation (Power)
let power = a ** b;
console.log(power);  // 1000 (10^3)
```

### Real-World Example: Shopping Cart
```javascript
let price = 50;
let quantity = 3;
let tax = 0.1;  // 10% tax

let subtotal = price * quantity;
let taxAmount = subtotal * tax;
let total = subtotal + taxAmount;

console.log("Subtotal:", subtotal);      // 150
console.log("Tax:", taxAmount);          // 15
console.log("Total:", total);            // 165
```

---

## 2. Assignment Operators

### Basic Assignment
```javascript
let x = 10;  // Assign 10 to x
console.log(x);  // 10
```

### Compound Assignment Operators (Shortcuts!)
```javascript
let score = 100;

// Add and assign
score += 10;  // Same as: score = score + 10
console.log(score);  // 110

// Subtract and assign
score -= 20;  // Same as: score = score - 20
console.log(score);  // 90

// Multiply and assign
score *= 2;  // Same as: score = score * 2
console.log(score);  // 180

// Divide and assign
score /= 3;  // Same as: score = score / 3
console.log(score);  // 60

// Modulus and assign
score %= 7;  // Same as: score = score % 7
console.log(score);  // 4
```

### Real Example: Game Score
```javascript
let playerScore = 0;

console.log("Starting score:", playerScore);

playerScore += 50;  // Enemy defeated
console.log("After defeating enemy:", playerScore);  // 50

playerScore += 100;  // Level completed
console.log("After level complete:", playerScore);  // 150

playerScore -= 25;  // Damage taken
console.log("After damage:", playerScore);  // 125

playerScore *= 2;  // Score multiplier bonus
console.log("After bonus:", playerScore);  // 250
```

---

## 3. Increment and Decrement Operators

### Increment (++)
```javascript
let count = 5;

count++;  // Increase by 1 (same as count = count + 1)
console.log(count);  // 6

count++;
console.log(count);  // 7
```

### Decrement (--)
```javascript
let lives = 3;

lives--;  // Decrease by 1
console.log(lives);  // 2

lives--;
console.log(lives);  // 1
```

### Pre vs Post Increment
```javascript
let x = 5;

// Post-increment (use value, then increment)
let a = x++;
console.log(a);  // 5 (old value)
console.log(x);  // 6 (incremented)

// Pre-increment (increment, then use value)
let y = 5;
let b = ++y;
console.log(b);  // 6 (incremented value)
console.log(y);  // 6
```

**For now, just use the simpler way:**
```javascript
count++;  // Increase by 1
count--;  // Decrease by 1
```

---

## 4. Comparison Operators (True or False)

These operators compare values and return `true` or `false`.

### Equal to (==) vs Strictly Equal (===)
```javascript
// Loose equality (converts types)
console.log(5 == "5");   // true (converts string to number)
console.log(5 == 5);     // true

// Strict equality (checks type AND value)
console.log(5 === "5");  // false (different types)
console.log(5 === 5);    // true
```

**Best Practice:** ALWAYS use `===` (strict equality)

### Not Equal (!=) vs Strictly Not Equal (!==)
```javascript
console.log(5 != "5");   // false
console.log(5 !== "5");  // true (different types)
```

**Best Practice:** ALWAYS use `!==`

### Greater Than and Less Than
```javascript
let age = 25;

console.log(age > 18);   // true
console.log(age < 30);   // true
console.log(age >= 25);  // true (greater or equal)
console.log(age <= 20);  // false
```

### Real Example: Age Verification
```javascript
const userAge = 20;
const minimumAge = 18;

let canEnter = userAge >= minimumAge;
console.log("Can enter:", canEnter);  // true

const movieAge = 17;
let canWatchMovie = movieAge >= minimumAge;
console.log("Can watch movie:", canWatchMovie);  // false
```

---

## 5. Logical Operators (Combine Conditions)

### AND (&&) - Both must be true
```javascript
let age = 25;
let hasLicense = true;

// Can drive if age >= 18 AND has license
let canDrive = (age >= 18) && hasLicense;
console.log("Can drive:", canDrive);  // true

let age2 = 16;
let canDrive2 = (age2 >= 18) && hasLicense;
console.log("Can drive:", canDrive2);  // false (age is not >= 18)
```

**Truth Table for AND (&&):**
```javascript
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);  // false
```

### OR (||) - At least one must be true
```javascript
let isWeekend = true;
let isHoliday = false;

// Free if weekend OR holiday
let isFree = isWeekend || isHoliday;
console.log("Is free:", isFree);  // true (one is true)

let isWeekend2 = false;
let isHoliday2 = false;
let isFree2 = isWeekend2 || isHoliday2;
console.log("Is free:", isFree2);  // false (both false)
```

**Truth Table for OR (||):**
```javascript
console.log(true || true);    // true
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);  // false
```

### NOT (!) - Flip the value
```javascript
let isRaining = true;
let isSunny = !isRaining;
console.log("Is sunny:", isSunny);  // false

let hasAccount = false;
let needsSignup = !hasAccount;
console.log("Needs signup:", needsSignup);  // true
```

### Real Example: Login System
```javascript
const username = "ifeanyi";
const password = "12345";
const isVerified = true;

// Can login if correct username AND password AND verified
let validUsername = username === "ifeanyi";
let validPassword = password === "12345";

let canLogin = validUsername && validPassword && isVerified;
console.log("Can login:", canLogin);  // true
```

### Real Example: Discount Eligibility
```javascript
const age = 22;
const isStudent = true;
const isMember = false;

// Get discount if student OR member OR age < 18
let getsDiscount = isStudent || isMember || (age < 18);
console.log("Gets discount:", getsDiscount);  // true (is student)
```

---

## 6. String Operators

### Concatenation (+)
```javascript
let firstName = "Ifeanyi";
let lastName = "Stanley";
let fullName = firstName + " " + lastName;
console.log(fullName);  // Ifeanyi Stanley

// With numbers
let text = "I have " + 5 + " apples";
console.log(text);  // I have 5 apples

// Concatenation with +=
let message = "Hello";
message += " World";
message += "!";
console.log(message);  // Hello World!
```

### Template Literals (Better Way!)
```javascript
const name = "Ifeanyi";
const age = 25;
const course = "JavaScript";

// Old way (concatenation)
let intro1 = "My name is " + name + ", I'm " + age + " years old.";

// New way (template literals)
let intro2 = `My name is ${name}, I'm ${age} years old.`;

console.log(intro1);
console.log(intro2);  // Same result, cleaner code!

// Multi-line strings
let bio = `
Name: ${name}
Age: ${age}
Course: ${course}
Status: Learning
`;
console.log(bio);
```

---

## 7. Ternary Operator (Shortcut If-Else)

Format: `condition ? valueIfTrue : valueIfFalse`

```javascript
let age = 20;

// Long way
let status;
if (age >= 18) {
    status = "Adult";
} else {
    status = "Minor";
}

// Short way (ternary)
let status2 = age >= 18 ? "Adult" : "Minor";
console.log(status2);  // Adult
```

### Real Examples
```javascript
// Example 1: Pricing
const age = 15;
const price = age < 18 ? 10 : 20;
console.log("Ticket price:", price);  // 10

// Example 2: Access
const isMember = true;
const access = isMember ? "Full Access" : "Limited Access";
console.log(access);  // Full Access

// Example 3: Greeting
const hour = 14;
const greeting = hour < 12 ? "Good morning" : "Good afternoon";
console.log(greeting);  // Good afternoon
```

---

## Operator Precedence (Order of Operations)

JavaScript follows math rules (PEMDAS):

```javascript
let result = 10 + 5 * 2;
console.log(result);  // 20 (not 30!)
// Multiplication happens first: 5 * 2 = 10, then 10 + 10 = 20

// Use parentheses to control order
let result2 = (10 + 5) * 2;
console.log(result2);  // 30
// Parentheses first: 10 + 5 = 15, then 15 * 2 = 30
```

**Order (highest to lowest):**
1. Parentheses `()`
2. Exponentiation `**`
3. Multiplication `*`, Division `/`, Modulus `%`
4. Addition `+`, Subtraction `-`
5. Comparison `<`, `>`, `<=`, `>=`
6. Equality `===`, `!==`
7. Logical AND `&&`
8. Logical OR `||`

---

## Practice Examples

### Example 1: Temperature Converter
```javascript
const celsius = 25;
const fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C is ${fahrenheit}°F`);  // 25°C is 77°F
```

### Example 2: BMI Calculator
```javascript
const weight = 70;  // kg
const height = 1.75;  // meters
const bmi = weight / (height ** 2);
console.log("BMI:", bmi.toFixed(2));  // BMI: 22.86
```

### Example 3: Discount Calculator
```javascript
const originalPrice = 100;
const discountPercent = 20;
const discount = originalPrice * (discountPercent / 100);
const finalPrice = originalPrice - discount;

console.log("Original:", originalPrice);
console.log("Discount:", discount);
console.log("Final Price:", finalPrice);  // 80
```

### Example 4: Even or Odd
```javascript
const number = 7;
const isEven = (number % 2 === 0);
const result = isEven ? "Even" : "Odd";
console.log(`${number} is ${result}`);  // 7 is Odd
```

---

## Hands-On Practice

Create `01-fundamentals/exercises/operators-practice.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operators Practice</title>
</head>
<body>
    <h1>Check the Console (F12)</h1>

    <script>
        // Challenge 1: Calculator
        let num1 = 15;
        let num2 = 4;

        console.log("=== CALCULATOR ===");
        console.log("Addition:", num1 + num2);
        console.log("Subtraction:", num1 - num2);
        console.log("Multiplication:", num1 * num2);
        console.log("Division:", num1 / num2);
        console.log("Remainder:", num1 % num2);
        console.log("Power:", num1 ** num2);

        // Challenge 2: Shopping
        let itemPrice = 25;
        let quantity = 3;
        let taxRate = 0.08;  // 8%

        let subtotal = itemPrice * quantity;
        let tax = subtotal * taxRate;
        let total = subtotal + tax;

        console.log("\n=== SHOPPING ===");
        console.log("Subtotal:", subtotal);
        console.log("Tax:", tax.toFixed(2));
        console.log("Total:", total.toFixed(2));

        // Challenge 3: Age Check
        let userAge = 22;
        let canVote = userAge >= 18;
        let canDrink = userAge >= 21;

        console.log("\n=== AGE CHECK ===");
        console.log("Age:", userAge);
        console.log("Can vote:", canVote);
        console.log("Can drink (US):", canDrink);

        // Challenge 4: Grade Calculator
        let score = 85;
        let grade = score >= 90 ? "A" :
                    score >= 80 ? "B" :
                    score >= 70 ? "C" :
                    score >= 60 ? "D" : "F";

        console.log("\n=== GRADE ===");
        console.log("Score:", score);
        console.log("Grade:", grade);
    </script>
</body>
</html>
```

---

## Exercise Challenges

### Challenge 1: Circle Calculator
```javascript
// Given radius = 5
// Calculate:
// - Area (π * r²)
// - Circumference (2 * π * r)
// Use Math.PI for π
```

### Challenge 2: Time Converter
```javascript
// Convert 150 minutes to hours and minutes
// Example: 150 minutes = 2 hours and 30 minutes
// Hint: Use division and modulus
```

### Challenge 3: Login Validator
```javascript
// Check if login is valid
// Valid if: username === "admin" AND password === "12345"
// Use logical operators
```

---

## Common Mistakes

### ❌ Mistake 1: Using = instead of ===
```javascript
let age = 18;
if (age = 20) {  // WRONG! This assigns 20 to age
    console.log("Adult");
}
```
**Fix:** Use `===` for comparison, `=` for assignment

### ❌ Mistake 2: Forgetting operator precedence
```javascript
let result = 10 + 5 * 2;  // 20, not 30
```
**Fix:** Use parentheses: `(10 + 5) * 2`

### ❌ Mistake 3: Using == instead of ===
```javascript
console.log(5 == "5");  // true (wrong!)
```
**Fix:** Always use `===`

---

## Quick Reference

```javascript
// Arithmetic
+  -  *  /  %  **

// Assignment
=  +=  -=  *=  /=  %=

// Increment/Decrement
++  --

// Comparison (Always use strict!)
===  !==  >  <  >=  <=

// Logical
&&  ||  !

// String
+ (concatenation)
`${variable}` (template literal)

// Ternary
condition ? true : false
```

---

## What's Next?

Now that you can do math and comparisons, next we'll learn **Control Flow** - how to make decisions with if/else statements!

**Ready?** Open `03-control-flow.md`

---

## Key Takeaways ✓

- [ ] Arithmetic operators do math
- [ ] Always use `===` not `==`
- [ ] `&&` means AND, `||` means OR, `!` means NOT
- [ ] Template literals are better than concatenation
- [ ] Ternary operator is shortcut if/else
- [ ] Order of operations matters (use parentheses!)

**Type all the examples to build muscle memory!** 💪
