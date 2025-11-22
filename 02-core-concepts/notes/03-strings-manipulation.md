# Module 02 - Lesson 3: Strings Manipulation

## What Are Strings?

Strings are **text data**. You've used them already, but now let's master string manipulation!

```javascript
let name = "Ifeanyi";
let message = 'Hello World';
let template = `Hello, ${name}!`;
```

---

## String Properties

### Length - Get string length
```javascript
let text = "JavaScript";
console.log(text.length);  // 10

let empty = "";
console.log(empty.length);  // 0

let sentence = "Hello, World!";
console.log(sentence.length);  // 13
```

---

## Accessing Characters

Strings are like arrays of characters!

```javascript
let text = "JavaScript";

console.log(text[0]);  // J
console.log(text[1]);  // a
console.log(text[4]);  // S

// Last character
console.log(text[text.length - 1]);  // t

// charAt() method (older way)
console.log(text.charAt(0));  // J
```

---

## String Methods

### 1. toUpperCase() / toLowerCase()
```javascript
let text = "JavaScript";

console.log(text.toUpperCase());  // JAVASCRIPT
console.log(text.toLowerCase());  // javascript

// Original unchanged
console.log(text);  // JavaScript

// Real use: Compare ignoring case
let input = "HELLO";
if (input.toLowerCase() === "hello") {
    console.log("Match!");
}
```

### 2. trim() - Remove whitespace
```javascript
let text = "   Hello World   ";

console.log(text.trim());        // "Hello World"
console.log(text.trimStart());   // "Hello World   "
console.log(text.trimEnd());     // "   Hello World"

// Real use: Clean user input
let username = "  ifeanyi  ";
let clean = username.trim();
console.log(clean);  // "ifeanyi"
```

### 3. includes() - Check if substring exists
```javascript
let text = "JavaScript is awesome";

console.log(text.includes("Java"));     // true
console.log(text.includes("Python"));   // false
console.log(text.includes("awesome"));  // true

// Case sensitive!
console.log(text.includes("javascript"));  // false

// Real use: Search
let email = "user@example.com";
if (email.includes("@")) {
    console.log("Valid email format");
}
```

### 4. startsWith() / endsWith()
```javascript
let text = "JavaScript is fun";

console.log(text.startsWith("Java"));    // true
console.log(text.startsWith("Python"));  // false
console.log(text.endsWith("fun"));       // true
console.log(text.endsWith("awesome"));   // false

// Real use: File extensions
let filename = "document.pdf";
if (filename.endsWith(".pdf")) {
    console.log("PDF file");
}
```

### 5. indexOf() / lastIndexOf() - Find position
```javascript
let text = "JavaScript is awesome. JavaScript is powerful.";

console.log(text.indexOf("JavaScript"));      // 0 (first occurrence)
console.log(text.lastIndexOf("JavaScript"));  // 23 (last occurrence)
console.log(text.indexOf("Python"));          // -1 (not found)

// Start searching from position
console.log(text.indexOf("is", 15));  // 34 (finds second "is")

// Real use: Check existence
if (text.indexOf("awesome") !== -1) {
    console.log("Found 'awesome'!");
}
```

### 6. slice() - Extract part of string
```javascript
let text = "JavaScript";

console.log(text.slice(0, 4));   // "Java" (0 to 4, 4 not included)
console.log(text.slice(4));      // "Script" (from 4 to end)
console.log(text.slice(-6));     // "Script" (last 6 chars)
console.log(text.slice(4, 10));  // "Script"

// Real use: Get file extension
let filename = "document.pdf";
let ext = filename.slice(-3);
console.log(ext);  // "pdf"
```

### 7. substring() - Similar to slice
```javascript
let text = "JavaScript";

console.log(text.substring(0, 4));  // "Java"
console.log(text.substring(4));     // "Script"

// Difference: substring doesn't accept negative indexes
```

### 8. replace() / replaceAll() - Replace text
```javascript
let text = "I love Python. Python is great!";

// Replace first occurrence
console.log(text.replace("Python", "JavaScript"));
// "I love JavaScript. Python is great!"

// Replace all occurrences (ES2021)
console.log(text.replaceAll("Python", "JavaScript"));
// "I love JavaScript. JavaScript is great!"

// Case insensitive replace (regex)
let text2 = "Hello WORLD hello";
console.log(text2.replace(/hello/gi, "Hi"));
// "Hi WORLD Hi"

// Real use: Clean input
let tweet = "JavaScript is #awesome! #coding";
let cleaned = tweet.replaceAll("#", "");
console.log(cleaned);  // "JavaScript is awesome! coding"
```

### 9. split() - Convert string to array
```javascript
let text = "Apple,Banana,Orange";

// Split by comma
let fruits = text.split(",");
console.log(fruits);  // ["Apple", "Banana", "Orange"]

// Split by space
let sentence = "Hello World JavaScript";
let words = sentence.split(" ");
console.log(words);  // ["Hello", "World", "JavaScript"]

// Split every character
let word = "Hello";
let chars = word.split("");
console.log(chars);  // ["H", "e", "l", "l", "o"]

// Real use: Process CSV data
let csv = "John,25,Developer";
let [name, age, job] = csv.split(",");
console.log(name);  // John
console.log(age);   // 25
console.log(job);   // Developer
```

### 10. repeat() - Repeat string
```javascript
let text = "Ha";
console.log(text.repeat(3));  // "HaHaHa"

let dash = "-";
console.log(dash.repeat(10));  // "----------"

// Real use: Create divider
let divider = "=".repeat(50);
console.log(divider);
console.log("Title");
console.log(divider);
```

### 11. padStart() / padEnd() - Add padding
```javascript
let num = "5";
console.log(num.padStart(3, "0"));  // "005"

let price = "99";
console.log(price.padEnd(5, "0"));  // "99000"

// Real use: Format numbers
let invoice = "42";
let formatted = "INV-" + invoice.padStart(5, "0");
console.log(formatted);  // "INV-00042"
```

### 12. concat() - Combine strings
```javascript
let first = "Hello";
let second = "World";

console.log(first.concat(" ", second));  // "Hello World"
console.log(first.concat(" ", second, "!"));  // "Hello World!"

// Usually better to use + or template literals
console.log(first + " " + second);      // "Hello World"
console.log(`${first} ${second}`);      // "Hello World"
```

### 13. charCodeAt() - Get character code
```javascript
let text = "A";
console.log(text.charCodeAt(0));  // 65 (ASCII code for 'A')

let text2 = "Hello";
console.log(text2.charCodeAt(0));  // 72 (H)
console.log(text2.charCodeAt(1));  // 101 (e)
```

### 14. match() - Find matches (regex)
```javascript
let text = "My email is test@example.com";

// Find email
let email = text.match(/\S+@\S+\.\S+/);
console.log(email[0]);  // "test@example.com"

// Find all numbers
let text2 = "I have 2 cats and 3 dogs";
let numbers = text2.match(/\d+/g);
console.log(numbers);  // ["2", "3"]
```

---

## Template Literals (Backticks)

Modern way to work with strings!

### Basic Usage
```javascript
let name = "Ifeanyi";
let age = 25;

// Old way
let message1 = "My name is " + name + " and I'm " + age + " years old.";

// New way (template literal)
let message2 = `My name is ${name} and I'm ${age} years old.`;

console.log(message2);
```

### Multi-line Strings
```javascript
// Old way (ugly!)
let text1 = "Line 1\n" +
            "Line 2\n" +
            "Line 3";

// New way (clean!)
let text2 = `Line 1
Line 2
Line 3`;

console.log(text2);
```

### Expressions in Templates
```javascript
let a = 10;
let b = 20;

console.log(`${a} + ${b} = ${a + b}`);  // "10 + 20 = 30"

let price = 100;
let tax = 0.1;
console.log(`Total: $${(price * (1 + tax)).toFixed(2)}`);  // "Total: $110.00"
```

### Tagged Templates (Advanced)
```javascript
function highlight(strings, ...values) {
    let result = '';
    strings.forEach((str, i) => {
        result += str;
        if (values[i]) {
            result += `<strong>${values[i]}</strong>`;
        }
    });
    return result;
}

let name = "Ifeanyi";
let age = 25;
let html = highlight`My name is ${name} and I'm ${age} years old.`;
console.log(html);
// "My name is <strong>Ifeanyi</strong> and I'm <strong>25</strong> years old."
```

---

## Real-World Examples

### Example 1: Email Validation
```javascript
function isValidEmail(email) {
    email = email.trim().toLowerCase();
    
    // Check basic format
    if (!email.includes("@")) {
        return false;
    }
    
    // Check for dot after @
    let atIndex = email.indexOf("@");
    let dotIndex = email.lastIndexOf(".");
    
    if (dotIndex <= atIndex) {
        return false;
    }
    
    // Check length
    if (email.length < 5) {
        return false;
    }
    
    return true;
}

console.log(isValidEmail("test@example.com"));     // true
console.log(isValidEmail("invalid.email"));        // false
console.log(isValidEmail("  USER@TEST.COM  "));    // true
```

### Example 2: Password Strength
```javascript
function checkPasswordStrength(password) {
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password)) strength++;  // Has lowercase
    if (/[A-Z]/.test(password)) strength++;  // Has uppercase
    if (/[0-9]/.test(password)) strength++;  // Has number
    if (/[^a-zA-Z0-9]/.test(password)) strength++;  // Has special char
    
    if (strength <= 2) return "Weak";
    if (strength <= 4) return "Medium";
    return "Strong";
}

console.log(checkPasswordStrength("abc123"));        // Weak
console.log(checkPasswordStrength("Abc123xyz"));     // Medium
console.log(checkPasswordStrength("Abc123!@#xyz"));  // Strong
```

### Example 3: Slug Generator
```javascript
function createSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')  // Remove special chars
        .replace(/\s+/g, '-')      // Replace spaces with -
        .replace(/-+/g, '-');      // Replace multiple - with single -
}

console.log(createSlug("JavaScript is Awesome!"));
// "javascript-is-awesome"

console.log(createSlug("  Hello   World  "));
// "hello-world"
```

### Example 4: Text Truncate
```javascript
function truncate(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + "...";
}

let long = "This is a very long text that needs to be shortened";
console.log(truncate(long, 20));  // "This is a very long ..."

let short = "Short text";
console.log(truncate(short, 20));  // "Short text"
```

### Example 5: Name Formatter
```javascript
function formatName(fullName) {
    // Split name
    let parts = fullName.trim().split(" ");
    
    // Capitalize each part
    let formatted = parts.map(part => {
        return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    });
    
    return formatted.join(" ");
}

console.log(formatName("john doe"));           // "John Doe"
console.log(formatName("SARAH SMITH"));        // "Sarah Smith"
console.log(formatName("  mike JOHNSON  "));   // "Mike Johnson"
```

### Example 6: Word Counter
```javascript
function countWords(text) {
    // Remove extra spaces and split
    let words = text.trim().split(/\s+/);
    
    // Filter out empty strings
    words = words.filter(word => word.length > 0);
    
    return words.length;
}

console.log(countWords("Hello World"));              // 2
console.log(countWords("  Too   many   spaces  "));  // 3
console.log(countWords("JavaScript is awesome!"));   // 3
```

### Example 7: Credit Card Formatter
```javascript
function formatCreditCard(number) {
    // Remove all non-digits
    let cleaned = number.replace(/\D/g, '');
    
    // Add space every 4 digits
    let formatted = cleaned.match(/.{1,4}/g) || [];
    return formatted.join(' ');
}

console.log(formatCreditCard("1234567890123456"));
// "1234 5678 9012 3456"

console.log(formatCreditCard("1234-5678-9012-3456"));
// "1234 5678 9012 3456"
```

---

## String Immutability

**Strings cannot be changed!** Every string method returns a NEW string.

```javascript
let text = "Hello";
text[0] = "J";  // Doesn't work!
console.log(text);  // Still "Hello"

// Must create new string
let newText = "J" + text.slice(1);
console.log(newText);  // "Jello"

// Or use replace
let text2 = "Hello";
let replaced = text2.replace("H", "J");
console.log(replaced);  // "Jello"
console.log(text2);     // "Hello" (original unchanged)
```

---

## Escape Characters

Special characters in strings:

```javascript
let text1 = "He said, \"Hello!\"";           // \" for quotes
console.log(text1);  // He said, "Hello!"

let text2 = 'It\'s a beautiful day';         // \' for apostrophe
console.log(text2);  // It's a beautiful day

let text3 = "Line 1\nLine 2";                // \n for new line
console.log(text3);
// Line 1
// Line 2

let text4 = "Name:\tJohn";                   // \t for tab
console.log(text4);  // Name:    John

let text5 = "Path: C:\\Users\\Documents";    // \\ for backslash
console.log(text5);  // Path: C:\Users\Documents
```

---

## Practice Exercises

Create `02-core-concepts/exercises/strings-practice.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strings Practice</title>
</head>
<body>
    <h1>Check Console (F12)</h1>
    <script>
        // Exercise 1: String methods
        let text = "  JavaScript is Awesome!  ";
        
        console.log("Original:", text);
        console.log("Trimmed:", text.trim());
        console.log("Uppercase:", text.toUpperCase());
        console.log("Lowercase:", text.toLowerCase());

        // Exercise 2: String search
        let sentence = "I love JavaScript. JavaScript is great!";
        
        console.log("Includes 'Java':", sentence.includes("Java"));
        console.log("Starts with 'I':", sentence.startsWith("I"));
        console.log("First 'JavaScript':", sentence.indexOf("JavaScript"));
        console.log("Last 'JavaScript':", sentence.lastIndexOf("JavaScript"));

        // Exercise 3: String manipulation
        let email = "  USER@EXAMPLE.COM  ";
        let cleaned = email.trim().toLowerCase();
        console.log("Cleaned email:", cleaned);

        // Exercise 4: Split and join
        let csv = "Apple,Banana,Orange,Mango";
        let fruits = csv.split(",");
        console.log("Fruits array:", fruits);
        
        let formatted = fruits.join(" | ");
        console.log("Formatted:", formatted);

        // Exercise 5: Template literals
        let name = "Ifeanyi";
        let age = 25;
        let city = "Lagos";
        
        let bio = `Hi! I'm ${name}, ${age} years old, living in ${city}.`;
        console.log(bio);
    </script>
</body>
</html>
```

---

## String Methods Cheat Sheet

```javascript
// Change case
toUpperCase()    // UPPERCASE
toLowerCase()    // lowercase

// Trim
trim()           // Remove whitespace from both ends
trimStart()      // Remove from start
trimEnd()        // Remove from end

// Search
includes(str)    // Check if contains
startsWith(str)  // Check if starts with
endsWith(str)    // Check if ends with
indexOf(str)     // Find first position
lastIndexOf(str) // Find last position

// Extract
slice(start, end)      // Extract part
substring(start, end)  // Extract part (no negatives)
charAt(index)          // Get character at index

// Modify
replace(old, new)      // Replace first match
replaceAll(old, new)   // Replace all matches
split(separator)       // Convert to array
repeat(count)          // Repeat string
padStart(len, char)    // Pad from start
padEnd(len, char)      // Pad from end

// Combine
concat(str)      // Join strings
+ operator       // Join strings
Template literal // `${var}`
```

---

## Key Takeaways ✓

- [ ] Strings are immutable (can't be changed)
- [ ] Use template literals for clean string building
- [ ] `trim()` cleans user input
- [ ] `includes/startsWith/endsWith` for checking
- [ ] `slice()` extracts parts
- [ ] `split()` converts string to array
- [ ] `replace/replaceAll()` for substitution
- [ ] String methods return NEW strings

**Next:** Loops to repeat actions! Open `04-loops-iteration.md` 💪
