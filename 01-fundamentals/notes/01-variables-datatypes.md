# Module 01 - Lesson 1: Variables & Data Types

## What Are Variables?

Variables are **containers** that store data. Think of them like labeled boxes where you can put different things and retrieve them later.

---

## Three Ways to Declare Variables

### 1. `let` - For values that can change
```javascript
let age = 25;
age = 26;  // ✅ Can change
console.log(age);  // Output: 26
```

### 2. `const` - For values that DON'T change
```javascript
const birthYear = 1999;
// birthYear = 2000;  // ❌ ERROR! Cannot change
console.log(birthYear);  // Output: 1999
```

### 3. `var` - The old way (avoid using it)
```javascript
var name = "Ifeanyi";  // Works, but use 'let' instead
```

**Best Practice:** Use `const` by default, only use `let` when the value will change.

---

## Variable Naming Rules

### ✅ Valid Names:
```javascript
let firstName = "Ifeanyi";
let age = 25;
let _private = "secret";
let $price = 100;
let student1 = "John";
```

### ❌ Invalid Names:
```javascript
// let 1student = "John";  // Can't start with number
// let first-name = "Ifeanyi";  // Can't use hyphens
// let let = "test";  // Can't use reserved words
```

### 💡 Naming Conventions (camelCase):
```javascript
let firstName = "Ifeanyi";      // ✅ Good
let first_name = "Ifeanyi";     // ❌ Not standard in JS
let FirstName = "Ifeanyi";      // ❌ This is for classes
```

---

## Data Types in JavaScript

JavaScript has **7 primitive data types**. Let's learn them one by one!

### 1. **String** - Text data
```javascript
let name = "Ifeanyi Stanley";
let course = 'JavaScript Mastery';
let message = `Hello, ${name}!`;  // Template literal

console.log(name);      // Ifeanyi Stanley
console.log(course);    // JavaScript Mastery
console.log(message);   // Hello, Ifeanyi Stanley!
```

**Three ways to create strings:**
- Double quotes: `"text"`
- Single quotes: `'text'`
- Backticks (template literals): `` `text` ``

**Template literals** let you embed variables:
```javascript
let firstName = "Ifeanyi";
let lastName = "Stanley";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);  // Ifeanyi Stanley
```

### 2. **Number** - Numeric data (integers and decimals)
```javascript
let age = 25;
let price = 99.99;
let temperature = -10;

console.log(age);         // 25
console.log(price);       // 99.99
console.log(temperature); // -10
```

**JavaScript only has ONE number type** (unlike other languages with int, float, etc.)

### 3. **Boolean** - True or False
```javascript
let isStudent = true;
let hasGraduated = false;
let isLoggedIn = true;

console.log(isStudent);      // true
console.log(hasGraduated);   // false
```

**Booleans are used for conditions and logic.**

### 4. **Undefined** - Variable declared but not assigned
```javascript
let username;
console.log(username);  // undefined

let age;
console.log(age);  // undefined
```

### 5. **Null** - Intentionally empty value
```javascript
let selectedItem = null;  // Nothing selected yet
console.log(selectedItem);  // null
```

**Difference:** `undefined` means "not assigned yet", `null` means "intentionally empty"

### 6. **Symbol** - Unique identifier (advanced, we'll cover later)
```javascript
let id = Symbol('id');
```

### 7. **BigInt** - Very large integers (advanced)
```javascript
let bigNumber = 1234567890123456789012345678901234567890n;
```

---

## Checking Data Types

Use `typeof` to check what type a variable is:

```javascript
let name = "Ifeanyi";
let age = 25;
let isStudent = true;
let nothing = null;
let notDefined;

console.log(typeof name);       // string
console.log(typeof age);        // number
console.log(typeof isStudent);  // boolean
console.log(typeof nothing);    // object (JavaScript bug!)
console.log(typeof notDefined); // undefined
```

**Note:** `typeof null` returns "object" - this is a famous JavaScript bug that was never fixed!

---

## Type Conversion

### Automatic Conversion (Type Coercion)
```javascript
let result1 = "5" + 5;     // "55" (string)
let result2 = "5" - 2;     // 3 (number)
let result3 = "5" * "2";   // 10 (number)

console.log(result1);  // 55
console.log(result2);  // 3
console.log(result3);  // 10
```

### Manual Conversion
```javascript
// String to Number
let str = "123";
let num = Number(str);
console.log(num);        // 123
console.log(typeof num); // number

// Number to String
let age = 25;
let ageStr = String(age);
console.log(ageStr);        // "25"
console.log(typeof ageStr); // string

// Shorter ways
let x = "456";
let y = +x;           // Convert to number
console.log(y);       // 456

let a = 789;
let b = a + "";       // Convert to string
console.log(b);       // "789"
```

---

## Practical Examples

### Example 1: Personal Information
```javascript
const firstName = "Ifeanyi";
const lastName = "Stanley";
const age = 25;
const isStudent = true;
const graduationYear = 2027;

console.log("Name:", firstName, lastName);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Graduation:", graduationYear);
```

### Example 2: Shopping Cart
```javascript
let productName = "Laptop";
let price = 1200.50;
let quantity = 2;
let inStock = true;
let discount = null;  // No discount yet

let total = price * quantity;
console.log("Product:", productName);
console.log("Price:", price);
console.log("Quantity:", quantity);
console.log("Total:", total);
console.log("In Stock:", inStock);
```

### Example 3: User Profile
```javascript
const username = "ifeanyi_dev";
const email = "ifeanyi@example.com";
const age = 25;
const isVerified = false;
const bio = `I'm ${age} years old and learning JavaScript!`;

console.log("Username:", username);
console.log("Email:", email);
console.log("Bio:", bio);
console.log("Verified:", isVerified);
```

---

## Hands-On Practice

**Create a new file:** `01-fundamentals/exercises/variables-practice.html`

Type this code (don't copy-paste!):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variables Practice</title>
</head>
<body>
    <h1>Check the Console (F12)</h1>

    <script>
        // YOUR CODE HERE
        // 1. Create variables with your personal info
        const myName = "Your Name";
        const myAge = 0;  // Your age
        const myCity = "Your City";
        const isLearningJS = true;

        // 2. Print them
        console.log("Name:", myName);
        console.log("Age:", myAge);
        console.log("City:", myCity);
        console.log("Learning JS:", isLearningJS);

        // 3. Create a greeting message
        const greeting = `Hello! I'm ${myName}, I'm ${myAge} years old, and I live in ${myCity}.`;
        console.log(greeting);

        // 4. Try different data types
        let favNumber = 7;
        let favColor = "blue";
        let likesJavaScript = true;
        let futureGoal = null;

        console.log("Favorite Number:", favNumber, "- Type:", typeof favNumber);
        console.log("Favorite Color:", favColor, "- Type:", typeof favColor);
        console.log("Likes JS:", likesJavaScript, "- Type:", typeof likesJavaScript);
        console.log("Future Goal:", futureGoal, "- Type:", typeof futureGoal);
    </script>
</body>
</html>
```

**Open this file in your browser and check the Console!**

---

## Exercise Challenges

### Challenge 1: Student Info
Create variables for:
- Student name
- Student ID
- GPA (Grade Point Average)
- Is enrolled (boolean)
- Print all information

### Challenge 2: Product Details
Create variables for:
- Product name
- Price
- Quantity
- Calculate total cost
- Print everything

### Challenge 3: Type Conversion
```javascript
let num1 = "100";
let num2 = "50";
// Add them as numbers (should be 150, not "10050")
// Hint: Convert to numbers first!
```

---

## Common Mistakes & How to Fix Them

### ❌ Mistake 1: Changing const
```javascript
const age = 25;
age = 26;  // ERROR!
```
**Fix:** Use `let` instead if value will change.

### ❌ Mistake 2: Forgetting quotes for strings
```javascript
let name = Ifeanyi;  // ERROR!
```
**Fix:** `let name = "Ifeanyi";`

### ❌ Mistake 3: Using reserved words
```javascript
let let = "test";  // ERROR!
let class = "JS";  // ERROR!
```
**Fix:** Choose different names

---

## Quick Reference

```javascript
// Variable Declaration
let name = "Ifeanyi";        // Can change
const age = 25;              // Cannot change
var old = "Don't use";       // Old way

// Data Types
"text"                       // String
123                          // Number
true / false                 // Boolean
undefined                    // Undefined
null                         // Null

// Check Type
typeof variable              // Returns data type

// Type Conversion
Number("123")                // String to Number
String(123)                  // Number to String
Boolean(1)                   // To Boolean
```

---

## What's Next?

Now that you understand variables and data types, we'll learn **Operators** in the next lesson - how to do math, compare values, and make logical decisions!

**Ready?** Open the next file: `02-operators.md`

---

## Key Takeaways ✓

- [ ] Variables store data
- [ ] Use `const` by default, `let` when value changes
- [ ] JavaScript has 7 primitive data types
- [ ] Use `typeof` to check data types
- [ ] Strings use quotes, numbers don't
- [ ] Booleans are `true` or `false`
- [ ] Template literals use backticks: `` `${variable}` ``

**Practice these concepts before moving on!** Type all the examples yourself! 💪
