# Module 01 - Lesson 3: Control Flow

## What is Control Flow?

Control flow determines **which code runs** based on conditions. It's like making decisions in real life!

**Example:** "IF it's raining, THEN take an umbrella, ELSE wear sunglasses"

---

## 1. If Statement

Run code **only if** a condition is true.

### Basic Syntax
```javascript
if (condition) {
    // Code runs if condition is true
}
```

### Example
```javascript
let age = 20;

if (age >= 18) {
    console.log("You are an adult");
}
// Output: You are an adult
```

### Real Examples
```javascript
// Example 1: Temperature Warning
let temperature = 35;

if (temperature > 30) {
    console.log("It's hot outside!");
}

// Example 2: Stock Alert
let stock = 5;

if (stock < 10) {
    console.log("Low stock alert!");
}

// Example 3: Password Length
let password = "abc";

if (password.length < 8) {
    console.log("Password too short!");
}
```

---

## 2. If-Else Statement

Do one thing if true, another if false.

### Syntax
```javascript
if (condition) {
    // Runs if true
} else {
    // Runs if false
}
```

### Examples
```javascript
// Example 1: Age Check
let age = 15;

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("Too young to vote");
}
// Output: Too young to vote

// Example 2: Login Status
let isLoggedIn = false;

if (isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in");
}
// Output: Please log in

// Example 3: Even or Odd
let number = 7;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
// Output: Odd number
```

---

## 3. If-Else If-Else (Multiple Conditions)

Check multiple conditions in order.

### Syntax
```javascript
if (condition1) {
    // Runs if condition1 is true
} else if (condition2) {
    // Runs if condition2 is true
} else if (condition3) {
    // Runs if condition3 is true
} else {
    // Runs if all conditions are false
}
```

### Example: Grade Calculator
```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
// Output: Grade: B
```

### Example: Time of Day
```javascript
let hour = 14;

if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
// Output: Good afternoon!
```

### Example: Ticket Pricing
```javascript
let age = 10;
let price;

if (age < 5) {
    price = 0;  // Free for young kids
} else if (age < 18) {
    price = 10;  // Child ticket
} else if (age < 65) {
    price = 20;  // Adult ticket
} else {
    price = 15;  // Senior discount
}

console.log("Ticket price: $" + price);
// Output: Ticket price: $10
```

---

## 4. Nested If Statements

Put if statements **inside** other if statements.

```javascript
let age = 20;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive!");
    } else {
        console.log("Get a license first");
    }
} else {
    console.log("Too young to drive");
}
// Output: You can drive!
```

### Better Way: Use Logical Operators
```javascript
let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive!");
} else if (age >= 18 && !hasLicense) {
    console.log("Get a license first");
} else {
    console.log("Too young to drive");
}
```

### Real Example: Access Control
```javascript
let isLoggedIn = true;
let isVerified = true;
let hasPermission = false;

if (isLoggedIn) {
    if (isVerified) {
        if (hasPermission) {
            console.log("Access granted");
        } else {
            console.log("Permission denied");
        }
    } else {
        console.log("Please verify your email");
    }
} else {
    console.log("Please log in");
}
// Output: Permission denied
```

---

## 5. Switch Statement

Better for checking ONE variable against many values.

### Syntax
```javascript
switch (expression) {
    case value1:
        // Code for value1
        break;
    case value2:
        // Code for value2
        break;
    default:
        // Code if no match
}
```

### Example: Day of Week
```javascript
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);  // Wednesday
```

### Example: Calculator Operation
```javascript
let operator = "+";
let num1 = 10;
let num2 = 5;
let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        result = "Invalid operator";
}

console.log("Result:", result);  // Result: 15
```

### Example: Grade Letters
```javascript
let grade = "B";

switch (grade) {
    case "A":
        console.log("Excellent!");
        break;
    case "B":
        console.log("Great job!");
        break;
    case "C":
        console.log("Good effort!");
        break;
    case "D":
        console.log("Need improvement");
        break;
    case "F":
        console.log("Failed");
        break;
    default:
        console.log("Invalid grade");
}
// Output: Great job!
```

### Multiple Cases (Same Code)
```javascript
let day = "Saturday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a weekday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Invalid day");
}
// Output: It's the weekend!
```

---

## 6. Truthy and Falsy Values

JavaScript treats some values as `false` even if they're not actually boolean `false`.

### Falsy Values (Treated as false)
```javascript
if (false) { }         // false
if (0) { }             // 0
if ("") { }            // empty string
if (null) { }          // null
if (undefined) { }     // undefined
if (NaN) { }           // Not a Number

// NONE of these run!
```

### Truthy Values (Everything else!)
```javascript
if (true) { }          // true
if (1) { }             // any number except 0
if ("hello") { }       // any non-empty string
if ([]) { }            // arrays
if ({}) { }            // objects

// ALL of these run!
```

### Practical Use
```javascript
let username = "";

if (username) {
    console.log("Hello, " + username);
} else {
    console.log("Please enter username");
}
// Output: Please enter username

let username2 = "Ifeanyi";
if (username2) {
    console.log("Hello, " + username2);
}
// Output: Hello, Ifeanyi
```

---

## Real-World Examples

### Example 1: Login System
```javascript
const username = "ifeanyi";
const password = "12345";
const correctUsername = "ifeanyi";
const correctPassword = "12345";

if (username === correctUsername && password === correctPassword) {
    console.log("✅ Login successful!");
} else if (username !== correctUsername) {
    console.log("❌ Invalid username");
} else {
    console.log("❌ Invalid password");
}
```

### Example 2: Shopping Cart Discount
```javascript
const cartTotal = 120;
const isMember = true;
let discount = 0;

if (cartTotal > 100) {
    if (isMember) {
        discount = 20;  // 20% member discount
    } else {
        discount = 10;  // 10% regular discount
    }
} else {
    discount = 0;  // No discount
}

const finalTotal = cartTotal - (cartTotal * discount / 100);
console.log("Original:", cartTotal);
console.log("Discount:", discount + "%");
console.log("Final:", finalTotal);
```

### Example 3: Temperature Alert
```javascript
const temperature = 38;

if (temperature < 0) {
    console.log("🥶 Freezing! Stay inside!");
} else if (temperature < 10) {
    console.log("❄️ Very cold! Wear a heavy jacket!");
} else if (temperature < 20) {
    console.log("😊 Cool weather. Light jacket recommended.");
} else if (temperature < 30) {
    console.log("☀️ Perfect weather!");
} else {
    console.log("🔥 Very hot! Stay hydrated!");
}
// Output: 🔥 Very hot! Stay hydrated!
```

### Example 4: BMI Health Status
```javascript
const weight = 70;  // kg
const height = 1.75;  // meters
const bmi = weight / (height ** 2);

console.log("BMI:", bmi.toFixed(2));

if (bmi < 18.5) {
    console.log("Status: Underweight");
} else if (bmi < 25) {
    console.log("Status: Normal weight");
} else if (bmi < 30) {
    console.log("Status: Overweight");
} else {
    console.log("Status: Obese");
}
```

---

## Hands-On Practice

Create `01-fundamentals/exercises/control-flow-practice.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Control Flow Practice</title>
</head>
<body>
    <h1>Check the Console (F12)</h1>

    <script>
        // Challenge 1: Voting Eligibility
        let age = 17;

        if (age >= 18) {
            console.log("You can vote!");
        } else {
            let yearsLeft = 18 - age;
            console.log(`Wait ${yearsLeft} more year(s)`);
        }

        // Challenge 2: Grade System
        let score = 75;
        let grade;

        if (score >= 90) {
            grade = "A";
        } else if (score >= 80) {
            grade = "B";
        } else if (score >= 70) {
            grade = "C";
        } else if (score >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }

        console.log("Score:", score);
        console.log("Grade:", grade);

        // Challenge 3: Traffic Light
        let light = "yellow";

        switch (light) {
            case "red":
                console.log("🛑 STOP");
                break;
            case "yellow":
                console.log("⚠️ SLOW DOWN");
                break;
            case "green":
                console.log("✅ GO");
                break;
            default:
                console.log("❓ Invalid light");
        }

        // Challenge 4: Season Finder
        let month = 7;  // July
        let season;

        switch (month) {
            case 12:
            case 1:
            case 2:
                season = "Winter";
                break;
            case 3:
            case 4:
            case 5:
                season = "Spring";
                break;
            case 6:
            case 7:
            case 8:
                season = "Summer";
                break;
            case 9:
            case 10:
            case 11:
                season = "Fall";
                break;
            default:
                season = "Invalid month";
        }

        console.log("Month:", month);
        console.log("Season:", season);
    </script>
</body>
</html>
```

---

## Exercise Challenges

### Challenge 1: Number Classifier
```javascript
// Given a number, classify it as:
// - "Positive" if > 0
// - "Negative" if < 0
// - "Zero" if === 0
let num = -5;
// Write your code here
```

### Challenge 2: Leap Year Checker
```javascript
// A year is a leap year if:
// - Divisible by 4 AND
// - NOT divisible by 100, UNLESS also divisible by 400
let year = 2024;
// Write your code here
```

### Challenge 3: Password Strength
```javascript
// Check password strength:
// - "Strong" if length >= 12
// - "Medium" if length >= 8
// - "Weak" if length < 8
let password = "mypass123";
// Write your code here
```

---

## Common Mistakes

### ❌ Mistake 1: Forgetting break in switch
```javascript
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        // Missing break! Will continue to next case
    case 2:
        console.log("Tuesday");
}
// Output: Monday Tuesday (WRONG!)
```

### ❌ Mistake 2: Using = instead of ===
```javascript
if (age = 18) {  // WRONG! This assigns 18 to age
    console.log("Adult");
}
```

### ❌ Mistake 3: Unreachable code
```javascript
if (age >= 18) {
    console.log("Adult");
} else if (age >= 20) {  // This will NEVER run!
    console.log("Adult 20+");
}
```

---

## Quick Reference

```javascript
// If
if (condition) { }

// If-Else
if (condition) { } else { }

// If-Else If
if (condition1) { }
else if (condition2) { }
else { }

// Switch
switch (value) {
    case option1:
        // code
        break;
    case option2:
        // code
        break;
    default:
        // code
}

// Falsy Values
false, 0, "", null, undefined, NaN
```

---

## What's Next?

You can now make decisions! Next, we'll learn **Functions** - how to organize and reuse code!

**Ready?** Open `04-functions-basics.md`

---

## Key Takeaways ✓

- [ ] `if` runs code when condition is true
- [ ] `else` runs when condition is false
- [ ] `else if` checks multiple conditions
- [ ] `switch` is good for checking one value
- [ ] Always use `break` in switch cases
- [ ] Falsy values: false, 0, "", null, undefined, NaN
- [ ] Everything else is truthy!

**Practice making decisions with code!** 💪
