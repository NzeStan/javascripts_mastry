# Module 02 - Lesson 4: Loops & Iteration

## What Are Loops?

Loops **repeat actions** multiple times. Instead of writing the same code over and over, use a loop!

**Without loop (repetitive!):**
```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

**With loop (smart!):**
```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

---

## 1. for Loop

The most common loop!

### Basic Syntax
```javascript
for (initialization; condition; increment) {
    // Code to repeat
}
```

### Examples
```javascript
// Count 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1 2 3 4 5

// Count 0 to 4
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0 1 2 3 4

// Count backwards
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
// Output: 5 4 3 2 1

// Count by 2
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
// Output: 0 2 4 6 8 10
```

### Loop Through Arrays
```javascript
let fruits = ["Apple", "Banana", "Orange", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Apple
// Banana
// Orange
// Mango

// With index
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}: ${fruits[i]}`);
}
// 0: Apple
// 1: Banana
// 2: Orange
// 3: Mango
```

---

## 2. while Loop

Repeats WHILE condition is true.

### Basic Syntax
```javascript
while (condition) {
    // Code to repeat
}
```

### Examples
```javascript
// Count 1 to 5
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
// Output: 1 2 3 4 5

// User input (example)
let password = "";
while (password !== "secret") {
    password = prompt("Enter password:");
}
console.log("Access granted!");

// Process array
let numbers = [1, 2, 3, 4, 5];
let index = 0;
while (index < numbers.length) {
    console.log(numbers[index]);
    index++;
}
```

**Warning:** Make sure condition eventually becomes false, or you'll have an infinite loop!

```javascript
// ❌ INFINITE LOOP - DON'T DO THIS!
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     // Forgot to increment i!
// }
```

---

## 3. do...while Loop

Runs code FIRST, then checks condition. Guaranteed to run at least once!

### Basic Syntax
```javascript
do {
    // Code to repeat
} while (condition);
```

### Examples
```javascript
// Runs at least once
let i = 10;
do {
    console.log(i);
    i++;
} while (i <= 5);
// Output: 10 (runs once even though condition is false)

// Menu system example
let choice;
do {
    console.log("1. Start Game");
    console.log("2. Settings");
    console.log("3. Exit");
    choice = prompt("Choose option:");
} while (choice !== "3");

// Validation example
let age;
do {
    age = parseInt(prompt("Enter age (18+):"));
} while (age < 18 || isNaN(age));
```

---

## 4. for...of Loop (Arrays & Iterables)

Modern way to loop through arrays!

### Basic Syntax
```javascript
for (let element of array) {
    // Code for each element
}
```

### Examples
```javascript
// Loop through array
let fruits = ["Apple", "Banana", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}
// Apple
// Banana
// Orange

// Loop through string
let word = "Hello";
for (let char of word) {
    console.log(char);
}
// H e l l o

// Real example: Calculate total
let prices = [10, 20, 30, 40, 50];
let total = 0;

for (let price of prices) {
    total += price;
}
console.log("Total:", total);  // 150
```

**Best for:** When you need the VALUE, not the index.

---

## 5. for...in Loop (Objects)

Loop through object properties!

### Basic Syntax
```javascript
for (let key in object) {
    // Code for each property
}
```

### Examples
```javascript
// Loop through object
let person = {
    name: "Ifeanyi",
    age: 25,
    city: "Lagos"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// name: Ifeanyi
// age: 25
// city: Lagos

// Loop through array (not recommended!)
let fruits = ["Apple", "Banana", "Orange"];

for (let index in fruits) {
    console.log(index + ": " + fruits[index]);
}
// 0: Apple
// 1: Banana
// 2: Orange
```

**Note:** For arrays, use `for...of` or `forEach()` instead!

---

## 6. Array forEach() Method

Built-in array method for looping!

### Basic Syntax
```javascript
array.forEach(function(element, index, array) {
    // Code for each element
});
```

### Examples
```javascript
// Basic loop
let fruits = ["Apple", "Banana", "Orange"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});

// With arrow function (cleaner!)
fruits.forEach(fruit => console.log(fruit));

// With index
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
// 0: Apple
// 1: Banana
// 2: Orange

// Real example: Process shopping cart
let cart = [
    { item: "Laptop", price: 1000 },
    { item: "Mouse", price: 20 },
    { item: "Keyboard", price: 50 }
];

let total = 0;
cart.forEach(product => {
    console.log(`${product.item}: $${product.price}`);
    total += product.price;
});
console.log("Total: $" + total);
```

**Can't use** `break` or `continue` with forEach!

---

## break Statement

Exit a loop early!

```javascript
// Stop at 5
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;  // Exit loop
    }
    console.log(i);
}
// Output: 1 2 3 4

// Find first match
let numbers = [5, 10, 15, 20, 25];
let found = false;

for (let num of numbers) {
    if (num > 12) {
        console.log("Found:", num);
        found = true;
        break;
    }
}
// Found: 15
```

---

## continue Statement

Skip current iteration, continue to next!

```javascript
// Skip even numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;  // Skip to next iteration
    }
    console.log(i);
}
// Output: 1 3 5 7 9

// Skip negative numbers
let numbers = [5, -3, 10, -1, 15];

for (let num of numbers) {
    if (num < 0) {
        continue;  // Skip negative
    }
    console.log(num);
}
// Output: 5 10 15
```

---

## Nested Loops

Loops inside loops!

```javascript
// Multiplication table
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 2 x 1 = 2
// 2 x 2 = 4
// ...

// 2D array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
// Output: 1 2 3 4 5 6 7 8 9

// Patterns
for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}
// *
// **
// ***
// ****
// *****
```

---

## Real-World Examples

### Example 1: Sum Array
```javascript
let numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let num of numbers) {
    sum += num;
}

console.log("Sum:", sum);  // 150
```

### Example 2: Find Maximum
```javascript
let numbers = [5, 12, 8, 20, 3, 15];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Maximum:", max);  // 20
```

### Example 3: Count Vowels
```javascript
function countVowels(text) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    
    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

console.log(countVowels("JavaScript"));  // 3 (a, a, i)
console.log(countVowels("Hello World"));  // 3 (e, o, o)
```

### Example 4: Reverse Array
```javascript
let numbers = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i]);
}

console.log(reversed);  // [5, 4, 3, 2, 1]
```

### Example 5: Filter Students
```javascript
let students = [
    { name: "John", score: 85 },
    { name: "Sarah", score: 92 },
    { name: "Mike", score: 78 },
    { name: "Emma", score: 95 }
];

let topStudents = [];

for (let student of students) {
    if (student.score >= 90) {
        topStudents.push(student);
    }
}

console.log("Top students:", topStudents);
// [{ name: "Sarah", score: 92 }, { name: "Emma", score: 95 }]
```

### Example 6: Fibonacci Sequence
```javascript
let n = 10;
let fib = [0, 1];

for (let i = 2; i < n; i++) {
    fib[i] = fib[i-1] + fib[i-2];
}

console.log(fib);
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### Example 7: Shopping Cart Total
```javascript
let cart = [
    { item: "Laptop", price: 1000, quantity: 1 },
    { item: "Mouse", price: 20, quantity: 2 },
    { item: "Keyboard", price: 50, quantity: 1 }
];

let total = 0;

for (let product of cart) {
    total += product.price * product.quantity;
}

console.log("Cart total: $" + total);  // $1090
```

### Example 8: Grade Calculator
```javascript
let scores = [85, 90, 78, 92, 88];
let sum = 0;

for (let score of scores) {
    sum += score;
}

let average = sum / scores.length;
let grade;

if (average >= 90) grade = "A";
else if (average >= 80) grade = "B";
else if (average >= 70) grade = "C";
else if (average >= 60) grade = "D";
else grade = "F";

console.log("Average:", average);  // 86.6
console.log("Grade:", grade);      // B
```

---

## Loop Performance Tips

### 1. Cache array length
```javascript
let arr = [1, 2, 3, 4, 5];

// ❌ Slower (calculates length every iteration)
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// ✅ Faster (calculates once)
let len = arr.length;
for (let i = 0; i < len; i++) {
    console.log(arr[i]);
}
```

### 2. Use appropriate loop
```javascript
let numbers = [1, 2, 3, 4, 5];

// Need index? Use regular for
for (let i = 0; i < numbers.length; i++) {
    console.log(i, numbers[i]);
}

// Just need value? Use for...of
for (let num of numbers) {
    console.log(num);
}

// Need to modify array? Use forEach
numbers.forEach((num, i) => {
    numbers[i] = num * 2;
});
```

---

## When to Use Which Loop?

| Loop | Best For | Example |
|------|----------|---------|
| **for** | When you need index, backwards, or step | Loop with index, custom increment |
| **while** | Unknown iterations, condition-based | User input, validation |
| **do...while** | Run at least once | Menus, prompts |
| **for...of** | Loop array values | Simple array iteration |
| **for...in** | Loop object properties | Object key-value pairs |
| **forEach** | Array operations | Process each array item |

---

## Common Loop Mistakes

### ❌ Mistake 1: Off-by-one error
```javascript
let arr = [1, 2, 3];

// WRONG - goes out of bounds
for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);  // Last one is undefined
}

// CORRECT
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

### ❌ Mistake 2: Infinite loop
```javascript
// WRONG - never ends!
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     // Forgot i++
// }

// CORRECT
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

### ❌ Mistake 3: Modifying array during loop
```javascript
let numbers = [1, 2, 3, 4, 5];

// WRONG - unpredictable behavior
// for (let i = 0; i < numbers.length; i++) {
//     numbers.splice(i, 1);  // Don't do this!
// }

// CORRECT - loop backwards when removing
for (let i = numbers.length - 1; i >= 0; i--) {
    numbers.splice(i, 1);
}
```

---

## Practice Exercises

Create `02-core-concepts/exercises/loops-practice.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loops Practice</title>
</head>
<body>
    <h1>Check Console (F12)</h1>
    <script>
        // Exercise 1: Basic for loop
        console.log("=== Count to 10 ===");
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }

        // Exercise 2: Loop through array
        console.log("\n=== Fruits ===");
        let fruits = ["Apple", "Banana", "Orange", "Mango"];
        for (let fruit of fruits) {
            console.log(fruit);
        }

        // Exercise 3: Sum numbers
        console.log("\n=== Sum ===");
        let numbers = [5, 10, 15, 20, 25];
        let sum = 0;
        for (let num of numbers) {
            sum += num;
        }
        console.log("Sum:", sum);

        // Exercise 4: Object loop
        console.log("\n=== Person Info ===");
        let person = {
            name: "Ifeanyi",
            age: 25,
            city: "Lagos",
            country: "Nigeria"
        };
        for (let key in person) {
            console.log(`${key}: ${person[key]}`);
        }

        // Exercise 5: Filter array
        console.log("\n=== Even Numbers ===");
        let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let evens = [];
        for (let num of allNumbers) {
            if (num % 2 === 0) {
                evens.push(num);
            }
        }
        console.log(evens);

        // Exercise 6: Reverse string
        console.log("\n=== Reverse ===");
        let word = "JavaScript";
        let reversed = "";
        for (let i = word.length - 1; i >= 0; i--) {
            reversed += word[i];
        }
        console.log(reversed);  // tpircSavaJ
    </script>
</body>
</html>
```

---

## Loops Cheat Sheet

```javascript
// for loop - most common
for (let i = 0; i < 10; i++) { }

// while loop - condition-based
while (condition) { }

// do...while - run at least once
do { } while (condition);

// for...of - loop array values
for (let item of array) { }

// for...in - loop object keys
for (let key in object) { }

// forEach - array method
array.forEach(item => { });

// Control
break       // Exit loop
continue    // Skip to next iteration
```

---

## Key Takeaways ✓

- [ ] `for` loop is most common (use with index)
- [ ] `while` loop runs WHILE condition is true
- [ ] `do...while` runs at least once
- [ ] `for...of` loops through array values
- [ ] `for...in` loops through object keys
- [ ] `forEach` is an array method
- [ ] `break` exits loop, `continue` skips iteration
- [ ] Cache array length for performance

**Next:** Build a Todo List App! Go to `project-todo-app/` folder! 💪
