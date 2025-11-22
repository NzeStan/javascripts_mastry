# Module 02 - Lesson 1: Arrays & Array Methods

## What Are Arrays?

Arrays are **lists** that store multiple values in a single variable. Think of them as numbered containers!

**Example:** Instead of this:
```javascript
let student1 = "John";
let student2 = "Sarah";
let student3 = "Mike";
```

**Do this:**
```javascript
let students = ["John", "Sarah", "Mike"];
```

---

## Creating Arrays

### Method 1: Array Literal (Most Common)
```javascript
let fruits = ["Apple", "Banana", "Orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["Text", 42, true, null];
let empty = [];

console.log(fruits);   // ["Apple", "Banana", "Orange"]
console.log(numbers);  // [1, 2, 3, 4, 5]
```

### Method 2: Array Constructor
```javascript
let colors = new Array("Red", "Green", "Blue");
console.log(colors);  // ["Red", "Green", "Blue"]
```

**Best Practice:** Use array literals `[]` - it's shorter and clearer!

---

## Accessing Array Elements

Arrays use **indexes** starting from **0**.

```javascript
let fruits = ["Apple", "Banana", "Orange", "Mango"];

console.log(fruits[0]);  // Apple (first item)
console.log(fruits[1]);  // Banana
console.log(fruits[2]);  // Orange
console.log(fruits[3]);  // Mango

// Last item
console.log(fruits[fruits.length - 1]);  // Mango
```

### Important: Arrays are Zero-Indexed!
```
Index:    0        1         2        3
Array:  ["Apple", "Banana", "Orange", "Mango"]
```

---

## Array Properties

### Length - Get the number of items
```javascript
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.length);  // 3

let numbers = [10, 20, 30, 40, 50];
console.log(numbers.length);  // 5

// Empty array
let empty = [];
console.log(empty.length);  // 0
```

---

## Modifying Arrays

### Change an element
```javascript
let fruits = ["Apple", "Banana", "Orange"];
fruits[1] = "Mango";
console.log(fruits);  // ["Apple", "Mango", "Orange"]
```

### Add to the end - push()
```javascript
let fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits);  // ["Apple", "Banana", "Orange"]

fruits.push("Mango", "Grape");
console.log(fruits);  // ["Apple", "Banana", "Orange", "Mango", "Grape"]
```

### Remove from the end - pop()
```javascript
let fruits = ["Apple", "Banana", "Orange"];
let removed = fruits.pop();
console.log(removed);  // Orange
console.log(fruits);   // ["Apple", "Banana"]
```

### Add to the beginning - unshift()
```javascript
let fruits = ["Banana", "Orange"];
fruits.unshift("Apple");
console.log(fruits);  // ["Apple", "Banana", "Orange"]
```

### Remove from the beginning - shift()
```javascript
let fruits = ["Apple", "Banana", "Orange"];
let removed = fruits.shift();
console.log(removed);  // Apple
console.log(fruits);   // ["Banana", "Orange"]
```

---

## Essential Array Methods

### 1. indexOf() - Find position of element
```javascript
let fruits = ["Apple", "Banana", "Orange", "Banana"];

console.log(fruits.indexOf("Banana"));   // 1 (first occurrence)
console.log(fruits.indexOf("Orange"));   // 2
console.log(fruits.indexOf("Grape"));    // -1 (not found)
```

### 2. includes() - Check if element exists
```javascript
let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.includes("Banana"));  // true
console.log(fruits.includes("Grape"));   // false

// Use in conditions
if (fruits.includes("Apple")) {
    console.log("We have apples!");
}
```

### 3. join() - Convert array to string
```javascript
let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.join());       // "Apple,Banana,Orange"
console.log(fruits.join(" "));    // "Apple Banana Orange"
console.log(fruits.join(" - "));  // "Apple - Banana - Orange"

// Real example: Display list
let names = ["John", "Sarah", "Mike"];
let message = "Students: " + names.join(", ");
console.log(message);  // Students: John, Sarah, Mike
```

### 4. slice() - Copy part of array (doesn't modify original)
```javascript
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grape"];

// Get elements from index 1 to 3 (3 not included)
let some = fruits.slice(1, 3);
console.log(some);    // ["Banana", "Orange"]
console.log(fruits);  // Original unchanged

// Get last 2 elements
let lastTwo = fruits.slice(-2);
console.log(lastTwo);  // ["Mango", "Grape"]

// Copy entire array
let copy = fruits.slice();
console.log(copy);  // ["Apple", "Banana", "Orange", "Mango", "Grape"]
```

### 5. splice() - Add/Remove elements (modifies original!)
```javascript
let fruits = ["Apple", "Banana", "Orange", "Mango"];

// Remove 1 element at index 2
fruits.splice(2, 1);
console.log(fruits);  // ["Apple", "Banana", "Mango"]

// Add elements at index 1
fruits.splice(1, 0, "Strawberry", "Grape");
console.log(fruits);  // ["Apple", "Strawberry", "Grape", "Banana", "Mango"]

// Replace elements: remove 2, add 2
let colors = ["Red", "Green", "Blue", "Yellow"];
colors.splice(1, 2, "Purple", "Orange");
console.log(colors);  // ["Red", "Purple", "Orange", "Yellow"]
```

### 6. concat() - Combine arrays
```javascript
let fruits = ["Apple", "Banana"];
let vegetables = ["Carrot", "Potato"];

let food = fruits.concat(vegetables);
console.log(food);  // ["Apple", "Banana", "Carrot", "Potato"]

// Combine multiple arrays
let breakfast = ["Coffee", "Toast"];
let lunch = ["Sandwich", "Juice"];
let dinner = ["Pasta", "Salad"];

let meals = breakfast.concat(lunch, dinner);
console.log(meals);  
// ["Coffee", "Toast", "Sandwich", "Juice", "Pasta", "Salad"]
```

### 7. reverse() - Reverse array order (modifies original!)
```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);  // [5, 4, 3, 2, 1]

let fruits = ["Apple", "Banana", "Orange"];
fruits.reverse();
console.log(fruits);  // ["Orange", "Banana", "Apple"]
```

### 8. sort() - Sort array (modifies original!)
```javascript
// Sort strings alphabetically
let fruits = ["Orange", "Apple", "Banana", "Mango"];
fruits.sort();
console.log(fruits);  // ["Apple", "Banana", "Mango", "Orange"]

// Sort numbers (need comparison function!)
let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b);  // Ascending
console.log(numbers);  // [1, 5, 10, 25, 40, 100]

numbers.sort((a, b) => b - a);  // Descending
console.log(numbers);  // [100, 40, 25, 10, 5, 1]
```

---

## Advanced Array Methods (Very Important!)

### 9. forEach() - Loop through array
```javascript
let fruits = ["Apple", "Banana", "Orange"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});
// Output:
// Apple
// Banana
// Orange

// With arrow function (shorter)
fruits.forEach((fruit) => console.log(fruit));

// With index
fruits.forEach((fruit, index) => {
    console.log(index + ": " + fruit);
});
// 0: Apple
// 1: Banana
// 2: Orange
```

### 10. map() - Transform each element (returns new array)
```javascript
let numbers = [1, 2, 3, 4, 5];

// Double each number
let doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]
console.log(numbers);  // [1, 2, 3, 4, 5] (original unchanged)

// Real example: Extract names
let users = [
    { name: "John", age: 25 },
    { name: "Sarah", age: 30 },
    { name: "Mike", age: 28 }
];

let names = users.map(user => user.name);
console.log(names);  // ["John", "Sarah", "Mike"]
```

### 11. filter() - Keep elements that pass test (returns new array)
```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get even numbers
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4, 6, 8, 10]

// Get numbers greater than 5
let bigNumbers = numbers.filter(num => num > 5);
console.log(bigNumbers);  // [6, 7, 8, 9, 10]

// Real example: Filter users by age
let users = [
    { name: "John", age: 17 },
    { name: "Sarah", age: 25 },
    { name: "Mike", age: 16 },
    { name: "Emma", age: 30 }
];

let adults = users.filter(user => user.age >= 18);
console.log(adults);
// [{ name: "Sarah", age: 25 }, { name: "Emma", age: 30 }]
```

### 12. find() - Get first element that passes test
```javascript
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Sarah" },
    { id: 3, name: "Mike" }
];

let user = users.find(u => u.id === 2);
console.log(user);  // { id: 2, name: "Sarah" }

// Not found returns undefined
let notFound = users.find(u => u.id === 99);
console.log(notFound);  // undefined
```

### 13. findIndex() - Get index of first element that passes test
```javascript
let numbers = [10, 20, 30, 40, 50];

let index = numbers.findIndex(num => num > 25);
console.log(index);  // 2 (element 30 is at index 2)

// Not found returns -1
let notFound = numbers.findIndex(num => num > 100);
console.log(notFound);  // -1
```

### 14. some() - Check if ANY element passes test
```javascript
let numbers = [1, 2, 3, 4, 5];

// Is any number greater than 4?
console.log(numbers.some(num => num > 4));  // true

// Is any number greater than 10?
console.log(numbers.some(num => num > 10));  // false

// Real example: Check if any user is admin
let users = [
    { name: "John", isAdmin: false },
    { name: "Sarah", isAdmin: true },
    { name: "Mike", isAdmin: false }
];

let hasAdmin = users.some(user => user.isAdmin);
console.log(hasAdmin);  // true
```

### 15. every() - Check if ALL elements pass test
```javascript
let numbers = [2, 4, 6, 8, 10];

// Are all numbers even?
console.log(numbers.every(num => num % 2 === 0));  // true

// Are all numbers greater than 5?
console.log(numbers.every(num => num > 5));  // false

// Real example: Check if all users are adults
let users = [
    { name: "John", age: 25 },
    { name: "Sarah", age: 30 },
    { name: "Mike", age: 28 }
];

let allAdults = users.every(user => user.age >= 18);
console.log(allAdults);  // true
```

### 16. reduce() - Reduce array to single value
```javascript
let numbers = [1, 2, 3, 4, 5];

// Sum all numbers
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);  // 15

// How it works:
// total starts at 0
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15

// Find maximum
let max = numbers.reduce((max, num) => num > max ? num : max);
console.log(max);  // 5

// Real example: Calculate total price
let cart = [
    { item: "Laptop", price: 1000 },
    { item: "Mouse", price: 20 },
    { item: "Keyboard", price: 50 }
];

let total = cart.reduce((sum, item) => sum + item.price, 0);
console.log(total);  // 1070
```

---

## Multi-Dimensional Arrays

Arrays can contain other arrays!

```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0]);     // [1, 2, 3]
console.log(matrix[0][0]);  // 1
console.log(matrix[1][2]);  // 6

// Real example: Student grades
let grades = [
    ["Math", 85, 90, 88],
    ["English", 92, 88, 95],
    ["Science", 78, 82, 80]
];

console.log(grades[0][0]);  // "Math"
console.log(grades[0][1]);  // 85 (first Math grade)
```

---

## Real-World Examples

### Example 1: Shopping Cart
```javascript
let cart = [];

// Add items
cart.push({ item: "Laptop", price: 1000, quantity: 1 });
cart.push({ item: "Mouse", price: 20, quantity: 2 });
cart.push({ item: "Keyboard", price: 50, quantity: 1 });

console.log("Cart items:", cart.length);

// Calculate total
let total = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
}, 0);

console.log("Total: $" + total);  // Total: $1090
```

### Example 2: Todo List
```javascript
let todos = [];

// Add todos
todos.push({ task: "Learn JavaScript", done: false });
todos.push({ task: "Build calculator", done: true });
todos.push({ task: "Learn arrays", done: false });

// Get incomplete tasks
let incomplete = todos.filter(todo => !todo.done);
console.log("Incomplete tasks:", incomplete.length);

// Mark task as done
let taskIndex = todos.findIndex(todo => todo.task === "Learn arrays");
if (taskIndex !== -1) {
    todos[taskIndex].done = true;
}
```

### Example 3: Student Records
```javascript
let students = [
    { name: "John", grades: [85, 90, 88] },
    { name: "Sarah", grades: [92, 88, 95] },
    { name: "Mike", grades: [78, 82, 80] }
];

// Calculate average for each student
students.forEach(student => {
    let sum = student.grades.reduce((a, b) => a + b, 0);
    let average = sum / student.grades.length;
    console.log(`${student.name}: ${average.toFixed(2)}`);
});
// John: 87.67
// Sarah: 91.67
// Mike: 80.00
```

---

## Common Mistakes

### ❌ Mistake 1: Forgetting arrays are zero-indexed
```javascript
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[3]);  // undefined (only 0, 1, 2 exist)
```

### ❌ Mistake 2: Modifying array during loop
```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
    numbers.push(num * 2);  // DON'T DO THIS! Infinite loop!
});
```

### ❌ Mistake 3: Forgetting to return in map/filter
```javascript
let numbers = [1, 2, 3];
let doubled = numbers.map(num => {
    num * 2;  // WRONG! Missing return
});
console.log(doubled);  // [undefined, undefined, undefined]
```
**Fix:** `return num * 2;` or use arrow function shorthand `num => num * 2`

---

## Array Methods Cheat Sheet

```javascript
// Modify original array
push()      // Add to end
pop()       // Remove from end
unshift()   // Add to beginning
shift()     // Remove from beginning
splice()    // Add/remove anywhere
reverse()   // Reverse order
sort()      // Sort elements

// Return new array (don't modify original)
concat()    // Combine arrays
slice()     // Copy part
map()       // Transform elements
filter()    // Keep elements that pass test

// Search
indexOf()   // Find position
includes()  // Check if exists
find()      // Get first match
findIndex() // Get index of first match

// Test
some()      // True if ANY pass
every()     // True if ALL pass

// Loop
forEach()   // Execute function for each

// Reduce
reduce()    // Reduce to single value

// Info
length      // Number of elements
join()      // Convert to string
```

---

## Practice Exercises

Create `02-core-concepts/exercises/arrays-practice.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arrays Practice</title>
</head>
<body>
    <h1>Check Console (F12)</h1>
    <script>
        // Exercise 1: Create and manipulate
        let fruits = ["Apple", "Banana", "Orange"];
        console.log("Original:", fruits);
        
        fruits.push("Mango");
        console.log("After push:", fruits);
        
        fruits.shift();
        console.log("After shift:", fruits);

        // Exercise 2: Array methods
        let numbers = [5, 10, 15, 20, 25, 30];
        
        let doubled = numbers.map(n => n * 2);
        console.log("Doubled:", doubled);
        
        let bigNumbers = numbers.filter(n => n > 15);
        console.log("Greater than 15:", bigNumbers);
        
        let sum = numbers.reduce((a, b) => a + b, 0);
        console.log("Sum:", sum);

        // Exercise 3: Real example
        let products = [
            { name: "Laptop", price: 1000 },
            { name: "Phone", price: 500 },
            { name: "Tablet", price: 300 }
        ];
        
        let total = products.reduce((sum, p) => sum + p.price, 0);
        console.log("Total price:", total);
        
        let expensive = products.filter(p => p.price > 400);
        console.log("Expensive items:", expensive);
    </script>
</body>
</html>
```

---

## Key Takeaways ✓

- [ ] Arrays store multiple values
- [ ] Arrays are zero-indexed (start at 0)
- [ ] `push/pop` work on the end
- [ ] `unshift/shift` work on the beginning
- [ ] `map` transforms each element
- [ ] `filter` keeps elements that pass test
- [ ] `forEach` loops through array
- [ ] `reduce` combines into single value
- [ ] Some methods modify original, others don't

**Next:** Objects! Open `02-objects-basics.md` 💪
